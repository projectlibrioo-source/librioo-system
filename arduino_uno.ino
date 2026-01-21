// 
// This code is for the Arduino Uno microcontroller acting as a SLAVE device
// in an I2C communication setup. It listens for data sent from a MASTER esp32
// Code for the SLAVE microcontroller (Arduino Uno)
//

/*
  === UNO + 6 Analog Sensors + L298N + ESP32 Shelf Receiver ===
  REWRITTEN (clean structure + proper line follow + always-print)

  -> Always prints sensor RAW + BLACK flags + state info
  -> Receives shelf number from ESP32 over SoftwareSerial (UNO D10)
  -> Follows BLACK line (your case: BLACK values > 800)
  -> Uses weighted error with "strength" (smoother than boolean-only)
  -> Marker counting (thick black bar) to stop at target shelf
  -> Line-lost grace + directional recovery

  Wiring:
    Sensors: A0..A5 (left->right)
    L298N: ENA=9 IN1=8 IN2=7  | ENB=3 IN3=5 IN4=4
    ESP32 TX(GPIO17) -> UNO D10
    ESP32 GND -> UNO GND
*/

#include <SoftwareSerial.h>

// ================= ESP32 LINK =================
SoftwareSerial espLink(10, 11); // RX=10 (from ESP32), TX=11 (unused)

// ================= MOTORS (L298N) =================
const int enA = 9, in1 = 8, in2 = 7;   // Left motor
const int enB = 3, in3 = 5, in4 = 4;   // Right motor

// ================= SENSORS =================
// LEFT -> RIGHT
const int sensorPins[6] = {A0, A1, A2, A3, A4, A5};

// Your case: BLACK line gives values > threshold
int thresh[6] = {800, 800, 800, 800, 800, 800}; // tune per sensor if needed

// ================= LINE FOLLOW CONTROL =================
int baseSpeed = 200;        // 0..255
float Kp = 0.08;            // steering gain for "strength-weighted" error (start 0.05..0.15)
int maxCorrection = 120;    // clamp correction
const int weights[6] = {-5, -3, -1, 1, 3, 5}; // left negative, right positive

// ================= MARKER / SHELF NAV =================
const int MAX_SHELF = 10;

// Map shelf -> marker index to stop at (EDIT THIS to match your track)
int shelfToMarker[MAX_SHELF + 1] = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

const int MARKER_BLACK_COUNT = 5;              // thick bar: >=5 sensors black
const unsigned long MARKER_DEBOUNCE_MS = 650;  // prevent double count

// ================= STATE =================
enum State { WAIT_SHELF, FOLLOW_TO_SHELF, ARRIVED };
State state = WAIT_SHELF;

int targetShelf = -1;
int targetMarkers = -1;
int markerCount = 0;
unsigned long lastMarkerTime = 0;

// Line lost handling
int lastDirection = 0;         // -1 left, +1 right
uint8_t lostGraceCount = 0;    // short forward grace before recovery
const uint8_t LOST_GRACE_MAX = 12; // ~12 loops of grace

// Debug printing
unsigned long lastPrint = 0;
const unsigned long PRINT_EVERY_MS = 150; // prints ~6-7 times/sec

// ================= HELPERS =================
inline bool isBlack(int raw, int t) {
  return raw > t; // YOUR CASE: black is higher than threshold
}

void stopMotors() {
  analogWrite(enA, 0);
  analogWrite(enB, 0);
  digitalWrite(in1, LOW); digitalWrite(in2, LOW);
  digitalWrite(in3, LOW); digitalWrite(in4, LOW);
}

void driveForward(int leftSpd, int rightSpd) {
  digitalWrite(in1, HIGH); digitalWrite(in2, LOW);
  digitalWrite(in3, HIGH); digitalWrite(in4, LOW);
  analogWrite(enA, constrain(leftSpd, 0, 255));
  analogWrite(enB, constrain(rightSpd, 0, 255));
}

void tankLeft(int spd) {
  digitalWrite(in1, LOW);  digitalWrite(in2, HIGH);
  digitalWrite(in3, HIGH); digitalWrite(in4, LOW);
  analogWrite(enA, constrain(spd, 0, 255));
  analogWrite(enB, constrain(spd, 0, 255));
}

void tankRight(int spd) {
  digitalWrite(in1, HIGH); digitalWrite(in2, LOW);
  digitalWrite(in3, LOW);  digitalWrite(in4, HIGH);
  analogWrite(enA, constrain(spd, 0, 255));
  analogWrite(enB, constrain(spd, 0, 255));
}

void printStatus(const int raw[6], const bool black[6], int blackCount, float err, int corr, int L, int R) {
  Serial.print("RAW: ");
  for (int i = 0; i < 6; i++) { Serial.print(raw[i]); Serial.print(" "); }

  Serial.print("| B:");
  for (int i = 0; i < 6; i++) { Serial.print(black[i] ? 1 : 0); Serial.print(" "); }

  Serial.print("| bc="); Serial.print(blackCount);
  Serial.print(" st="); Serial.print((int)state);
  Serial.print(" shelf="); Serial.print(targetShelf);
  Serial.print(" mk="); Serial.print(markerCount); Serial.print("/"); Serial.print(targetMarkers);

  Serial.print(" err="); Serial.print(err, 2);
  Serial.print(" cor="); Serial.print(corr);
  Serial.print(" L="); Serial.print(L);
  Serial.print(" R="); Serial.println(R);
}

// ================= SETUP =================
void setup() {
  Serial.begin(9600);
  espLink.begin(9600);

  pinMode(enA, OUTPUT); pinMode(in1, OUTPUT); pinMode(in2, OUTPUT);
  pinMode(enB, OUTPUT); pinMode(in3, OUTPUT); pinMode(in4, OUTPUT);

  stopMotors();

  Serial.println("UNO READY (rewritten): always-print + black-line follow + shelf stop");
  Serial.println("Waiting for shelf number from ESP32...");
}

// ================= LOOP =================
void loop() {
  // 1) Receive shelf number (non-blocking)
  if (espLink.available()) {
    String msg = espLink.readStringUntil('\n');
    msg.trim();

    if (msg.length() > 0) {
      int s = msg.toInt();
      if (s >= 1 && s <= MAX_SHELF) {
        targetShelf = s;
        targetMarkers = shelfToMarker[s];
        markerCount = 0;
        lastMarkerTime = 0;
        lostGraceCount = 0;
        state = FOLLOW_TO_SHELF;

        Serial.print("Received shelf: ");
        Serial.print(targetShelf);
        Serial.print(" | stop at marker: ");
        Serial.println(targetMarkers);
      } else {
        Serial.print("Invalid shelf received: ");
        Serial.println(msg);
      }
    }
  }

  // 2) Always read sensors
  int raw[6];
  bool black[6];
  int blackCount = 0;

  // Strength-weighted error (smooth control)
  long weightedSum = 0;
  long totalStrength = 0;

  for (int i = 0; i < 6; i++) {
    raw[i] = analogRead(sensorPins[i]);
    black[i] = isBlack(raw[i], thresh[i]);
    if (black[i]) blackCount++;

    // Strength: how far above threshold (only when on black)
    int strength = raw[i] - thresh[i];
    if (strength < 0) strength = 0;

    weightedSum += (long)weights[i] * strength;
    totalStrength += strength;
  }

  // Compute error (0 when centered). If totalStrength==0 => no line
  float error = 0.0;
  if (totalStrength > 0) error = (float)weightedSum / (float)totalStrength;

  // 3) Marker detection (only relevant while moving to shelf)
  if (state == FOLLOW_TO_SHELF) {
    if (blackCount >= MARKER_BLACK_COUNT) {
      unsigned long now = millis();
      if (now - lastMarkerTime > MARKER_DEBOUNCE_MS) {
        markerCount++;
        lastMarkerTime = now;
        Serial.print("Marker detected! count=");
        Serial.println(markerCount);

        if (targetMarkers > 0 && markerCount >= targetMarkers) {
          Serial.println("ARRIVED at target shelf. Stopping.");
          state = ARRIVED;
        }
      }
    }
  }

  // 4) Motor control based on state
  int correction = 0;
  int leftSpeed = 0, rightSpeed = 0;

  if (state == WAIT_SHELF) {
    stopMotors();
  }
  else if (state == ARRIVED) {
    stopMotors();
  }
  else { // FOLLOW_TO_SHELF
    // Line lost handling
    if (totalStrength == 0) {
      // small forward grace before recovery turn
      lostGraceCount++;
      if (lostGraceCount <= LOST_GRACE_MAX) {
        driveForward(baseSpeed, baseSpeed);
      } else {
        // recover in last known direction
        if (lastDirection < 0) tankLeft(140);
        else                   tankRight(140);
      }
    } else {
      lostGraceCount = 0;

      // Update last direction for recovery
      if (error < -0.15) lastDirection = -1;
      else if (error > 0.15) lastDirection = 1;

      // P-control correction
      correction = (int)(Kp * error * 255.0); // scale for PWM range feel
      correction = constrain(correction, -maxCorrection, maxCorrection);

      leftSpeed  = constrain(baseSpeed - correction, 0, 255);
      rightSpeed = constrain(baseSpeed + correction, 0, 255);

      driveForward(leftSpeed, rightSpeed);
    }
  }

  // 5) Always print (throttled)
  if (millis() - lastPrint >= PRINT_EVERY_MS) {
    printStatus(raw, black, blackCount, error, correction, leftSpeed, rightSpeed);
    lastPrint = millis();
  }

  delay(5);
}
