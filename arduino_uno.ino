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
