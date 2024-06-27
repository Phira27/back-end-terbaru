const ErrorResponse = require('../utils/ErrorResponse');
const { validatePasirian } = require('../utils/validation');
const { getPasirian, insertPasirian, getPasirianTerbaru } = require('./../models/pasirianModel');

exports.createData = (req, res, next) => {
    // Menyalin data dari body request dan menambahkan waktu saat ini
    const data = { ...req.body };
    data.time = new Date();

    // Query SQL untuk menyisipkan data ke tabel pasirian
    const querySql = 'INSERT INTO pasirian SET ?';

    // Memvalidasi data menggunakan fungsi validatePasirian
    const errors = validatePasirian(data);
    if (errors) {
        // Mengirimkan respons error jika ada kesalahan validasi
        return next(new ErrorResponse(errors[0], 400));
    }

    // Memasukkan data ke dalam basis data menggunakan fungsi insertPasirian
    insertPasirian(res, querySql, data, next);
};

exports.readData = (req, res, next) => {
    // Query SQL untuk mengambil semua data dari tabel pasirian
    const querySql = `
        SELECT 
            DATE(time) as tanggal,
            ROUND(AVG(temperature), 2) as rata_temperature,
            ROUND(AVG(humidity), 2) as rata_humidity,
            ROUND(AVG(NO2_concentration), 2) as rata_NO2_concentration,
            ROUND(AVG(PM10_concentration), 2) as rata_PM10_concentration,
            ROUND(AVG(PM25_concentration), 2) as rata_PM25_concentration,
             MAX(category_average) as modus_average
        FROM pasirian
        GROUP BY 
            DATE(time)
    `;

    // Mengambil data dari basis data menggunakan fungsi getPasirian
    getPasirian(res, querySql, next);
};

exports.pasirianTerbaru = (req, res, next) => {
    const querySql = 'SELECT * FROM pasirian ORDER BY time DESC LIMIT 5';

    getPasirianTerbaru(res, querySql, next);
};
