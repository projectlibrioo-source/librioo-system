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
