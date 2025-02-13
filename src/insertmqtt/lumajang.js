const { MQTT_TOPIC1, createMQTTClient } = require('../config/connectionMQTT');
const { calculateAllISPU } = require('../utils/ispuCal');
const db = require('../config/connectionDB'); // Pastikan Anda memiliki modul database

class Lumajang {
  constructor() {
    this.mqttClient = createMQTTClient();
    this.setupMQTTListeners();
  }

  setupMQTTListeners() {
    this.mqttClient.on("connect", () => {
      console.log("Terhubung ke broker MQTT Lumajang");
      this.mqttClient.subscribe(MQTT_TOPIC1);
    });

    this.mqttClient.on("message", (topic, message) => {
      this.handleMessage(topic, message);
    });
  }

  handleMessage(topic, message) {
    if (topic === MQTT_TOPIC1) {
      const data = JSON.parse(message.toString());
      console.log("Data diterima:", data);

      const ispuResults = calculateAllISPU(data);
      this.saveToDatabase(data, ispuResults);
    }
  }

  saveToDatabase(data, ispuResults) {
    const query =
      "INSERT INTO lumajang (temperature, humidity, NO2_concentration, PM10_concentration, PM25_concentration, ispu_no2, ispu_pm10, ispu_pm25, ispu_average, category_no2, category_pm10, category_pm25, category_average, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
      data.temperature,
      data.humidity,
      data.NO2_concentration,
      data.PM10_concentration,
      data.PM25_concentration,
      ispuResults.ispu_no2,
      ispuResults.ispu_pm10,
      ispuResults.ispu_pm25,
      ispuResults.ispu_average,
      ispuResults.category_no2,
      ispuResults.category_pm10,
      ispuResults.category_pm25,
      ispuResults.category_average,
      new Date(),
    ];

    db.query(query, values, (error, results) => {
      if (error) {
        console.error("Gagal menyimpan data ke database:", error);
      } else {
        console.log("Jumlah baris yang dimasukkan:", results.affectedRows);
      }
    });
  }
}

module.exports = Lumajang;