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

