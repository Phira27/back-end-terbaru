const mqtt = require("mqtt");

// MQTT Configuration
const MQTT_BROKER = "mqtt://test.mosquitto.org";
const MQTT_TOPIC = "tugasakhir/lumajang";

// Create MQTT client
function createMQTTClient() {
  return mqtt.connect({
    host: 'broker.sinaungoding.com',
    port: 1883,
    username: 'uwais',
    password: 'uw415_4Lqarn1'
  });
}

module.exports = {
  MQTT_TOPIC,
  createMQTTClient
};