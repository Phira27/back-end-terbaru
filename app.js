const express = require("express");
const cors = require("cors");
const port = 3000;
const pasirianRouter = require('./src/routes/PasirianRoutes')
const lumajangRouter = require('./src/routes/LumajangRoutes')
const senduroRouter = require('./src/routes/SenduroRoutes')
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(pasirianRouter);
app.use(lumajangRouter);
app.use(senduroRouter)



const Pasirian = require('./src/insertmqtt/pasirian');

const monitor = new Pasirian();
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Konfigurasi Broker MQTT
// const MQTT_BROKER = "mqtt://test.mosquitto.org";
// const MQTT_TOPIC = "tugasakhir/lumajang"; 

// // Buat koneksi ke broker MQTT
// client = mqtt.connect({
//   host: 'broker.sinaungoding.com',
//   port: 1883,
//   username: 'uwais',
//   password: 'uw415_4Lqarn1'
// });

// // Fungsi untuk menghitung ISPU
// const calculateISPU = (Ia, Ib, Xa, Xb, Xx) => {
//   return ((Ia - Ib) / (Xa - Xb)) * (Xx - Xb) + Ib;
// };

// // Fungsi untuk mengonversi nilai ISPU ke kategori
// const getISPUCategory = (value) => {
//   if (value >= 0 && value <= 50) return "Baik";
//   if (value >= 51 && value <= 100) return "Sedang";
//   if (value >= 101 && value <= 200) return "Tidak Sehat";
//   if (value >= 201 && value <= 300) return "Sangat Tidak Sehat";
//   if (value >= 301) return "Berbahaya";
//   return "Data Tidak Valid";
// };

// // Tangani event koneksi ke MQTT broker
// client.on("connect", () => {
//   console.log("Terhubung ke broker MQTT");
//   client.subscribe(MQTT_TOPIC);
// });

// client.on("message", (topic,  message) => {
//   console.log(message);

//   if (topic === MQTT_TOPIC) {
//     const data = JSON.parse(message.toString());

//     console.log(data);

//     // Batas atas dan bawah untuk setiap parameter
//     const NO2_bounds = [
//       { Ia: 50, Ib: 0, Xa: 100, Xb: 0 },
//       { Ia: 100, Ib: 51, Xa: 200, Xb: 101 },
//       { Ia: 200, Ib: 101, Xa: 1000, Xb: 201 },
//     ];
//     const PM10_bounds = [
//       { Ia: 50, Ib: 0, Xa: 50, Xb: 0 },
//       { Ia: 100, Ib: 51, Xa: 150, Xb: 51 },
//       { Ia: 200, Ib: 101, Xa: 350, Xb: 151 },
//       { Ia: 300, Ib: 201, Xa: 420, Xb: 351 },
//       { Ia: 500, Ib: 301, Xa: 500, Xb: 421 },
//     ];
//     const PM25_bounds = [
//       { Ia: 50, Ib: 0, Xa: 15.5, Xb: 0 },
//       { Ia: 100, Ib: 51, Xa: 55.4, Xb: 15.6 },
//       { Ia: 200, Ib: 101, Xa: 150.4, Xb: 55.5 },
//       { Ia: 300, Ib: 201, Xa: 250.4, Xb: 150.5 },
//       { Ia: 500, Ib: 301, Xa: 500, Xb: 250.5 },
//     ];

//     // Contoh penghitungan ISPU dengan menggunakan nilai batas
//     const calculateISPUWithBounds = (bounds, concentration) => {
//       for (let i = 0; i < bounds.length; i++) {
//         if (concentration <= bounds[i].Xa) {
//           return calculateISPU(
//             bounds[i].Ia,
//             bounds[i].Ib,
//             bounds[i].Xa,
//             bounds[i].Xb,
//             concentration
//           );
//         }
//       }
//       return null; // Nilai tidak valid
//     };

//     // Hitung ISPU untuk NO2, PM10, PM2.5
//     const ispu_no2 = calculateISPUWithBounds(NO2_bounds, data.NO2_concentration);
    

//     const ispu_pm10 = calculateISPUWithBounds(PM10_bounds, data.PM10_concentration);
//     const ispu_pm25 = calculateISPUWithBounds(PM25_bounds, data.PM25_concentration);

//     // Hitung rata-rata ISPU
//     const ispu_average = (ispu_no2 + ispu_pm10 + ispu_pm25) / 3;

//     // Konversi nilai ISPU ke kategori
//     const category_no2 = getISPUCategory(ispu_no2);
//     const category_pm10 = getISPUCategory(ispu_pm10);
//     const category_pm25 = getISPUCategory(ispu_pm25);
//     const category_average = getISPUCategory(ispu_average);

//     const query =
//       "INSERT INTO lumajang (temperature, humidity, NO2_concentration, PM10_concentration, PM25_concentration, ispu_no2, ispu_pm10, ispu_pm25, ispu_average, category_no2, category_pm10, category_pm25, category_average, time) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
//     const values = [
//       data.temperature,
//       data.humidity,
//       data.NO2_concentration,
//       data.PM10_concentration,
//       data.PM25_concentration,
//       ispu_no2,
//       ispu_pm10,
//       ispu_pm25,
//       ispu_average,
//       category_no2,
//       category_pm10,
//       category_pm25,
//       category_average,
//       new Date(),
//     ];

//     db.query(query, values, (error, results) => {
//       if (error) {
//         console.error("Gagal menyimpan data ke database:", error);
//       } else {
//         console.log("Jumlah Data Disimpan", results.affectedRows);
//       }
//     });
//   }
// });
