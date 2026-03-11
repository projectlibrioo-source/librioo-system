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

// ---------- HTML ----------
String makePage() {
  String page =
    "<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0'>"
    "<title>Librioo Robot</title></head><body>"
    "<h2>Librioo Robot</h2>"
    "<p>Send shelf:</p>"
    "<a href='/send?num=1'>Shelf 1</a><br>"
    "<a href='/send?num=2'>Shelf 2</a><br>"
    "<a href='/send?num=3'>Shelf 3</a><br>"
    "<a href='/send?num=4'>Shelf 4</a><br><br>"
    "<a href='/send?num=STOP' style='color:red;'>STOP</a><br>"
    "</body></html>";
  return page;
}

void handleRoot() {
  Serial.println("HTTP: /");
  server.send(200, "text/html", makePage());
}

void handleSend() {
  Serial.print("HTTP: /send  uri=");
  Serial.println(server.uri());

  if (!server.hasArg("num")) {
    server.send(400, "text/plain", "Missing num");
    return;
  }

  String cmd = server.arg("num");
  cmd.trim();

  //Send to UNO with newline
  Serial2.println(cmd);

  Serial.print("Sent to UNO: ");
  Serial.println(cmd);

  server.send(200, "text/plain", "Sent: " + cmd);

}

void handleNotFound() {
  Serial.print("404: ");
  Serial.println(server.uri());
}