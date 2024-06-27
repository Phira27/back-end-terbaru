const ErrorResponse = require('../utils/ErrorResponse');
const { validateSenduro } = require('../utils/validation');
const { getSenduro, insertSenduro, getSenduroTerbaru } = require('./../models/senduroModel');

exports.createData = (req, res, next) => {
    // Menyalin data dari body request dan menambahkan waktu saat ini
    const data = { ...req.body };
    data.time = new Date();

    // Query SQL untuk menyisipkan data ke tabel senduro
    const querySql = 'INSERT INTO senduro SET ?';

    // Memvalidasi data menggunakan fungsi validatesenduro
    const errors = validateSenduro(data);
    if (errors) {
        // Mengirimkan respons error jika ada kesalahan validasi
        return next(new ErrorResponse(errors[0], 400));
    }

    // Memasukkan data ke dalam basis data menggunakan fungsi insertsenduro
    insertSenduro(res, querySql, data, next);
};


exports.readData = (req, res, next) => {
    // Query SQL untuk mengambil semua data dari tabel senduro
    const querySql = `
        SELECT 
            DATE(time) as tanggal,
            ROUND(AVG(temperature), 2) as rata_temperature,
            ROUND(AVG(humidity), 2) as rata_humidity,
            ROUND(AVG(NO2_concentration), 2) as rata_NO2_concentration,
            ROUND(AVG(PM10_concentration), 2) as rata_PM10_concentration,
            ROUND(AVG(PM25_concentration), 2) as rata_PM25_concentration,
             MAX(category_average) as modus_average
        FROM senduro
        GROUP BY 
            DATE(time)
    `;

    // Mengambil data dari basis data menggunakan fungsi getsenduro
    getSenduro(res, querySql, next);
};
exports.senduroTerbaru = (req, res, next) => {
    const querySql = 'SELECT * FROM senduro ORDER BY time DESC LIMIT 5';

    getSenduroTerbaru(res, querySql, next);
};