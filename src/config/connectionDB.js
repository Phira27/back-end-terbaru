const mysql = require("mysql");

const db = mysql.createConnection({
  host: "bfz7qifvuoem3s9dqhpp-mysql.services.clever-cloud.com",
  user: "uihzvl73ald3hjhy",
  password: "gPOUeautE9VLYSkybVHT",
  database: "bfz7qifvuoem3s9dqhpp",
});

// Tangani event koneksi ke database MySQL
db.connect((error) => {
  if (error) {
    console.error("Gagal terhubung ke database:", error);
    process.exit(1); // Keluar dari aplikasi jika gagal terhubung
  } else {
    console.log("Terhubung ke database MySQL");
  }
});

module.exports = db;
