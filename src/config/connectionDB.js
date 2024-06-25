const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tugas_akhir",
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
