#include <SoftwareSerial.h>

// ================= ESP32 LINK =================
// ESP32 TX (GPIO17) -> UNO D10
// ESP32 GND -> UNO GND
SoftwareSerial espLink(10, 11); // RX=10, TX=11

// ================= LINE SENSORS =================
#define IR_L2 A0
#define IR_L1 A1
#define IR_C  A2
#define IR_R1 A3
#define IR_R2 A4

// ================= MOTORS (L298N) =================
#define LEFT_MOTOR_FW   8
#define LEFT_MOTOR_BW   7
#define RIGHT_MOTOR_FW  5
#define RIGHT_MOTOR_BW  4
#define ENA 9   // PWM
#define ENB 3   // PWM

int baseSpeed = 100;

// ================= SHELF CONTROL =================
bool running = false;          // line following active?
bool goingBack = false;        // returning to start?
int targetShelf = 0;           // shelf number received from ESP32
int stopCount = 0;             // how many stops passed so far

// Stop detection debounce (prevents counting the same stop many times)
bool inStop = false;

// ================= MOTOR HELPERS =================
void forward() {
  analogWrite(ENA, baseSpeed);
  analogWrite(ENB, baseSpeed);

  digitalWrite(LEFT_MOTOR_FW, HIGH);
  digitalWrite(LEFT_MOTOR_BW, LOW);
  digitalWrite(RIGHT_MOTOR_FW, HIGH);
  digitalWrite(RIGHT_MOTOR_BW, LOW);
}

void backward() {
  analogWrite(ENA, baseSpeed);
  analogWrite(ENB, baseSpeed);

  digitalWrite(LEFT_MOTOR_FW, LOW);
  digitalWrite(LEFT_MOTOR_BW, HIGH);
  digitalWrite(RIGHT_MOTOR_FW, LOW);
  digitalWrite(RIGHT_MOTOR_BW, HIGH);
}

void stopMotors() {
  analogWrite(ENA, baseSpeed);
  analogWrite(ENB, baseSpeed);

  digitalWrite(LEFT_MOTOR_FW, LOW);
  digitalWrite(LEFT_MOTOR_BW, LOW);
  digitalWrite(RIGHT_MOTOR_FW, LOW);
  digitalWrite(RIGHT_MOTOR_BW, LOW);
}

void turnLeft() {
  analogWrite(ENA, baseSpeed);
  analogWrite(ENB, baseSpeed);

  digitalWrite(LEFT_MOTOR_FW, LOW);
  digitalWrite(LEFT_MOTOR_BW, HIGH);   // left reverse
  digitalWrite(RIGHT_MOTOR_FW, HIGH);  // right forward
  digitalWrite(RIGHT_MOTOR_BW, LOW);
}

void turnRight() {
  analogWrite(ENA, baseSpeed);
  analogWrite(ENB, baseSpeed);

  digitalWrite(LEFT_MOTOR_FW, HIGH);   // left forward
  digitalWrite(LEFT_MOTOR_BW, LOW);
  digitalWrite(RIGHT_MOTOR_FW, LOW);
  digitalWrite(RIGHT_MOTOR_BW, HIGH);  // right reverse
}

// ================= SENSOR READ =================
void readSensors(bool &sL2, bool &sL1, bool &sC, bool &sR1, bool &sR2) {
  sL2 = digitalRead(IR_L2);
  sL1 = digitalRead(IR_L1);
  sC  = digitalRead(IR_C);
  sR1 = digitalRead(IR_R1);
  sR2 = digitalRead(IR_R2);

  // Debug print
  Serial.print(sL2); Serial.print(" ");
  Serial.print(sL1); Serial.print(" ");
  Serial.print(sC);  Serial.print(" ");
  Serial.print(sR1); Serial.print(" ");
  Serial.println(sR2);
}

// ================= STOP DETECTION =================
// Stops are 4 sensors wide — treat 4+ sensors detecting black as a stop marker
bool isStopMarker(bool sL2, bool sL1, bool sC, bool sR1, bool sR2) {
  // Assumption: LOW = black
  int blackCount = 0;
  if (sL2 == LOW) blackCount++;
  if (sL1 == LOW) blackCount++;
  if (sC  == LOW) blackCount++;
  if (sR1 == LOW) blackCount++;
  if (sR2 == LOW) blackCount++;

  return (blackCount >= 4);
}

// ================= LINE FOLLOW STEP (FORWARD) =================
void lineFollowStep(bool sL2, bool sL1, bool sC, bool sR1, bool sR2) {
  // Assumption: LOW = black line
  if (sC == LOW) {
    forward();
  } else if (sL1 == LOW || sL2 == LOW) {
    turnLeft();
  } else if (sR1 == LOW || sR2 == LOW) {
    turnRight();
  } else {
    stopMotors(); // lost line
  }
}

// ================= LINE FOLLOW STEP (BACKWARD) =================
// Mirrors the steering logic — left/right are swapped when reversing
void lineFollowStepBackward(bool sL2, bool sL1, bool sC, bool sR1, bool sR2) {
  if (sC == LOW) {
    backward();
  } else if (sR1 == LOW || sR2 == LOW) {
    // When reversing, drift to the right means steer left
    turnLeft();
  } else if (sL1 == LOW || sL2 == LOW) {
    // When reversing, drift to the left means steer right
    turnRight();
  } else {
    stopMotors(); // lost line
  }
}

// ================= ESP32 RECEIVE =================
void readShelfFromESP32() {
  if (!espLink.available()) return;

  String msg = espLink.readStringUntil('\n');
  msg.trim();
  if (msg.length() == 0) return;

  // "BACK" command — return to start
  if (msg == "BACK") {
    goingBack = true;
    running = true;
    stopCount = 0;
    inStop = false;
    Serial.println("GO BACK command received.");
    return;
  }

  // "STOP" command - stop the robot
  if (msg == "STOP") {
    running = false;
    stopMotors();
    Serial.println("STOP command received.");
    return;
  }

  int shelf = msg.toInt();
  if (shelf <= 0) {
    Serial.print("Invalid shelf msg: ");
    Serial.println(msg);
    return;
  }

  targetShelf = shelf;
  stopCount = 0;
  inStop = false;
  goingBack = false;
  running = true;

  Serial.print("Target shelf received: ");
  Serial.println(targetShelf);
}

// ================= FORWARD SHELF LOOP =================
void shelfLineFollowLoop() {
  bool sL2, sL1, sC, sR1, sR2;
  readSensors(sL2, sL1, sC, sR1, sR2);

  // 1) Detect stop markers
  bool stopNow = isStopMarker(sL2, sL1, sC, sR1, sR2);

  if (stopNow && !inStop) {
    inStop = true;
    stopCount++;
    Serial.print("STOP MARKER detected. Count = ");
    Serial.println(stopCount);
  }

  if (!stopNow && inStop) {
    inStop = false;
  }

  // 2) If reached target shelf -> stop
  if (stopCount >= targetShelf) {
    running = false;
    stopMotors();
    Serial.print("ARRIVED at shelf ");
    Serial.println(targetShelf);
    espLink.println(String("ARRIVED ") + targetShelf);
    return;
  }

  // 3) Otherwise continue line following forward
  lineFollowStep(sL2, sL1, sC, sR1, sR2);
}

// ================= GO BACK LOOP =================
// Reverses along the line, counting stop markers back to the start
void goBackLoop() {
  bool sL2, sL1, sC, sR1, sR2;
  readSensors(sL2, sL1, sC, sR1, sR2);

  // Detect stop markers while reversing
  bool stopNow = isStopMarker(sL2, sL1, sC, sR1, sR2);

  if (stopNow && !inStop) {
    inStop = true;
    stopCount++;
    Serial.print("BACK: stop marker passed. Count = ");
    Serial.println(stopCount);
  }

  if (!stopNow && inStop) {
    inStop = false;
  }

  // Arrived back at start when we've passed as many stops as the original shelf number
  if (stopCount >= targetShelf) {
    running = false;
    goingBack = false;
    stopMotors();
    Serial.println("RETURNED to start.");
    espLink.println("AT_START");
    return;
  }

  // Continue reversing along the line
  lineFollowStepBackward(sL2, sL1, sC, sR1, sR2);
}

// ================= SETUP =================
void setup() {
  pinMode(IR_L2, INPUT);
  pinMode(IR_L1, INPUT);
  pinMode(IR_C,  INPUT);
  pinMode(IR_R1, INPUT);
  pinMode(IR_R2, INPUT);

  pinMode(LEFT_MOTOR_FW, OUTPUT);
  pinMode(LEFT_MOTOR_BW, OUTPUT);
  pinMode(RIGHT_MOTOR_FW, OUTPUT);
  pinMode(RIGHT_MOTOR_BW, OUTPUT);
  pinMode(ENA, OUTPUT);
  pinMode(ENB, OUTPUT);

  Serial.begin(9600);
  espLink.begin(9600);

  stopMotors();
  Serial.println("UNO READY (Shelf-based line follow with go-back)");
}

// ================= LOOP =================
void loop() {
  // Always listen for new commands from ESP32
  readShelfFromESP32();

  if (running) {
    if (goingBack) {
      goBackLoop();       // reverse back to start
    } else {
      shelfLineFollowLoop(); // go forward to shelf
    }
  } else {
    stopMotors();
  }
}
