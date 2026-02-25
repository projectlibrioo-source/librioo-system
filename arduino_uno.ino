// Arduino code - The slave Microcontroller (Arduino Uno)

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

void stopMotors() {
  analogWrite(ENA, 0);
  analogWrite(ENB, 0);

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
// Your rule: "stops are 4 sensor wide"
// With 5 sensors, treat a stop as "4 or more sensors detect black".
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

// ================= LINE FOLLOW STEP =================
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