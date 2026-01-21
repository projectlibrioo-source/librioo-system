//
// This code is for the esp32 microcontroller acting as a MASTER device
//in an I2C communication setup. It sends data to a SLAVE Arduino Uno microcontroller
//Code for the MASTER microcontroller (esp32)
//


#include <WiFi.h>
#include <WebServer.h>

// ===== ACCESS POINT DETAILS =====
const char* ap_ssid = "LIBRIOO_ROBOT";
const char* ap_password = "12345678";   // min 8 chars

// ===== SERIAL TO UNO =====
#define RX2 16   // not used
#define TX2 17   // ESP32 -> UNO

WebServer server(80);

// ===== ROOT PAGE =====
void handleRoot() {
  String page =
    "<html>"
    "<head>"
    "<title>Librioo Robot</title>"
    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>"
    "<style>"
    "body {"
    "  font-family: Arial, sans-serif;"
    "  background: #f5f7fb;"
    "  display: flex;"
    "  justify-content: center;"
    "  align-items: center;"
    "  height: 100vh;"
    "  margin: 0;"
    "}"
    ".card {"
    "  background: #ffffff;"
    "  padding: 25px;"
    "  border-radius: 12px;"
    "  width: 90%;"
    "  max-width: 350px;"
    "  box-shadow: 0 10px 25px rgba(0,0,0,0.1);"
    "  text-align: center;"
    "}"
    "h2 {"
    "  margin-bottom: 10px;"
    "}"
    "p {"
    "  color: #555;"
    "  margin-bottom: 20px;"
    "}"
    "input[type=number] {"
    "  width: 100%;"
    "  padding: 12px;"
    "  font-size: 18px;"
    "  margin-bottom: 15px;"
    "  border-radius: 8px;"
    "  border: 1px solid #ccc;"
    "}"
    "button {"
    "  width: 100%;"
    "  padding: 12px;"
    "  font-size: 18px;"
    "  background: #3ddc97;"
    "  color: black;"
    "  border: none;"
    "  border-radius: 8px;"
    "  cursor: pointer;"
    "}"
    "button:hover {"
    "  background: #2fc187;"
    "}"
    ".quick {"
    "  margin-top: 15px;"
    "}"
    ".quick button {"
    "  width: 30%;"
    "  margin: 5px;"
    "  background: #eeeeee;"
    "}"
    "</style>"
    "</head>"

    "<body>"
    "<div class='card'>"
    "<h2> Librioo Robot </h2>"
    "<p>Send the robot to a shelf</p>"

    "<form action='/send'>"
    "<input type='number' name='num' placeholder='Enter shelf number' required>"
    "<button type='submit'>Send Shelf</button>"
    "</form>"

    "<div class='quick'>"
    "<p>Quick Shelves</p>"
    "<button onclick=\"location.href='/send?num=1'\">1</button>"
    "<button onclick=\"location.href='/send?num=2'\">2</button>"
    "<button onclick=\"location.href='/send?num=3'\">3</button>"
    "</div>"

    "</div>"
    "</body>"
    "</html>";

  server.send(200, "text/html", page);
}

// ===== SEND SHELF NUMBER =====
void handleSend() {
  if (server.hasArg("num")) {
    String shelf = server.arg("num");

    // Send to Arduino UNO
    Serial2.println(shelf);

    Serial.print("Shelf sent to UNO: ");
    Serial.println(shelf);

    server.send(200, "text/html",
      "<h3>Sent Shelf: " + shelf + "</h3><a href='/'>Send another</a>");
  } else {
    server.send(400, "text/plain", "No shelf number");
  }
}

void setup() {
  Serial.begin(115200);
  Serial2.begin(9600, SERIAL_8N1, RX2, TX2);

  // ===== START ACCESS POINT =====
  WiFi.softAP(ap_ssid, ap_password);

  IPAddress IP = WiFi.softAPIP();
  Serial.print("ESP32 AP IP address: ");
  Serial.println(IP);

  // Web server routes
  server.on("/", handleRoot);
  server.on("/send", handleSend);

  server.begin();
  Serial.println("Web server started");
}

void loop() {
  server.handleClient();
}
