#include <WiFi.h>
#include <WebServer.h>

// ===== EXISTING WIFI DETAILS =====
const char* wifi_ssid = "Sandun";
const char* wifi_password = "anc12345";

// ===== SERIAL TO UNO =====
// ESP32 TX2(GPIO19) -> UNO D10 (SoftwareSerial RX)
// ESP32 GND -> UNO GND
// (Optional) UNO D11 (TX) -> ESP32 RX2(GPIO16) via level shift
#define RX2 16
#define TX2 19

WebServer server(80);

