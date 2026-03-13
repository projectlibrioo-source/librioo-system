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
  Serial.println("UNO READY (Shelf-based line follow)");
}

// ================= LOOP =================
void loop() {
  // Always listen for new target shelf
  readShelfFromESP32();

  // Follow line only when a target shelf is set
  if (running) {
    shelfLineFollowLoop();
  } else {
    stopMotors();
  }
}
