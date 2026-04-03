#include <WiFi.h>
#include <FirebaseESP32.h>

// ===== WIFI DETAILS =====
const char* wifi_ssid     = "Nimuthu";
const char* wifi_password = "12345678";

// ===== FIREBASE DETAILS =====
// Replace these with your actual Firebase project values
#define FIREBASE_HOST "librioo-fb90e-default-rtdb.firebaseio.com"
#define FIREBASE_AUTH "hnF7eZxiMeFtxmngnowVkEOsdRJLqKkkADmqEUAs"

// ===== SERIAL TO UNO =====
// ESP32 TX2(GPIO19) -> UNO D10 (SoftwareSerial RX)
// ESP32 GND -> UNO GND
#define RX2 16
#define TX2 19

// ===== FIREBASE OBJECTS =====
FirebaseData fbData;
FirebaseConfig fbConfig;
FirebaseAuth fbAuth;

// ===== STATE =====
int  lastShelf    = -1;    // last shelf we sent to UNO (avoid re-sending)
bool lastWasBack  = false; // tracks if last command was BACK

unsigned long lastPollTime = 0;
const unsigned long POLL_INTERVAL = 1000; // poll Firebase every 1 second

// ===== SETUP =====
void setup() {
  Serial.begin(115200);
  Serial2.begin(9600, SERIAL_8N1, RX2, TX2);

  // ----- Connect WiFi -----
  WiFi.mode(WIFI_STA);
  WiFi.setSleep(false);
  WiFi.begin(wifi_ssid, wifi_password);

  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nWiFi connected!");
  Serial.print("IP: ");
  Serial.println(WiFi.localIP());

  // ----- Connect Firebase -----
  fbConfig.host = FIREBASE_HOST;
  fbConfig.signer.tokens.legacy_token = FIREBASE_AUTH;

  Firebase.begin(&fbConfig, &fbAuth);
  Firebase.reconnectWiFi(true);

  Serial.println("Firebase connected.");
  Serial.println("Listening for shelf commands...");
}

// ===== LOOP =====
void loop() {
  // Poll Firebase at set interval
  if (millis() - lastPollTime >= POLL_INTERVAL) {
    lastPollTime = millis();
    pollFirebase();
  }

  // Read replies from UNO (ARRIVED / AT_START)
  if (Serial2.available()) {
    String msg = Serial2.readStringUntil('\n');
    msg.trim();
    if (msg.length() > 0) {
      Serial.print("UNO -> ESP32: ");
      Serial.println(msg);
      handleUNOReply(msg);
    }
  }
}

// ===== POLL FIREBASE =====
void pollFirebase() {
  // --- Read targetShelf ---
  if (Firebase.getInt(fbData, "/robot/targetShelf")) {
    int shelf = fbData.intData();

    if (shelf > 0 && shelf != lastShelf) {
      lastShelf   = shelf;
      lastWasBack = false;

      Serial2.println(shelf);  // send shelf number to UNO
      Serial.print("Sent shelf to UNO: ");
      Serial.println(shelf);

      // Update status in Firebase
      Firebase.setString(fbData, "/robot/status", "MOVING");
    }
  } else {
    Serial.print("Firebase read error (targetShelf): ");
    Serial.println(fbData.errorReason());
  }

  // --- Read currentCommand (for BACK / STOP) ---
  if (Firebase.getString(fbData, "/robot/currentCommand")) {
    String cmd = fbData.stringData();
    cmd.trim();

    if (cmd == "BACK" && !lastWasBack) {
      lastWasBack = true;
      Serial2.println("BACK");   // send BACK command to UNO
      Serial.println("Sent BACK to UNO.");

      // Clear the command in Firebase so it doesn't repeat
      Firebase.setString(fbData, "/robot/currentCommand", "");
      Firebase.setString(fbData, "/robot/status", "RETURNING");
    }

    if (cmd == "STOP") {
      Serial2.println("STOP");
      Serial.println("Sent STOP to UNO.");
      Firebase.setString(fbData, "/robot/currentCommand", "");
      Firebase.setString(fbData, "/robot/status", "STOPPED");
    }
  } else {
    Serial.print("Firebase read error (currentCommand): ");
    Serial.println(fbData.errorReason());
  }
}

// ===== HANDLE UNO REPLIES =====
void handleUNOReply(String msg) {
  if (msg.startsWith("ARRIVED")) {
    // UNO arrived at shelf — update Firebase status
    Firebase.setString(fbData, "/robot/status", "ARRIVED");
    Serial.println("Firebase status -> ARRIVED");

  } else if (msg == "AT_START") {
    // UNO returned to start — reset Firebase
    Firebase.setString(fbData, "/robot/status", "IDLE");
    Firebase.setInt(fbData,    "/robot/targetShelf", 0);
    Firebase.setString(fbData, "/robot/currentCommand", "");
    lastShelf   = -1;
    lastWasBack = false;
    Serial.println("Firebase status -> IDLE (robot back at start)");
  }
}
