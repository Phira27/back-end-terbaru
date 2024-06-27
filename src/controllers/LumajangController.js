const { insertLumajang, getLumajang, getLumajangTerbaru } = require('../models/lumajangModel');
const ErrorResponse = require('../utils/ErrorResponse');
const {  validateLumajang } = require('../utils/validation');

exports.createData = (req, res, next) => {
    // Menyalin data dari body request dan menambahkan waktu saat ini
    const data = { ...req.body };
    data.time = new Date();

    // Query SQL untuk menyisipkan data ke tabel lumajang
    const querySql = 'INSERT INTO lumajang SET ?';

    // Memvalidasi data menggunakan fungsi validatelumajang
    const errors = validateLumajang(data);
    if (errors) {
    // Mengirimkan respons error jika ada kesalahan validasi
        return next(new ErrorResponse(errors[0], 400));
    }

    // Memasukkan data ke dalam basis data menggunakan fungsi insertlumajang
    insertLumajang(res, querySql, data, next);
};

exports.readData = (req, res, next) => {
    // Query SQL untuk mengambil data agregat dari tabel lumajang
    const querySql = `
        SELECT 
            DATE(time) as tanggal,
            ROUND(AVG(temperature), 2) as rata_temperature,
            ROUND(AVG(humidity), 2) as rata_humidity,
            ROUND(AVG(NO2_concentration), 2) as rata_NO2_concentration,
            ROUND(AVG(PM10_concentration), 2) as rata_PM10_concentration,
            ROUND(AVG(PM25_concentration), 2) as rata_PM25_concentration,
             MAX(category_average) as modus_average
        FROM lumajang
        GROUP BY 
            DATE(time)
    `;

    // Mengambil data dari basis data menggunakan fungsi getlumajang
    getLumajang(res, querySql, next);
};

exports.lumajangTerbaru = (req, res, next) => {
    const querySql = 'SELECT * FROM lumajang ORDER BY time DESC LIMIT 1';

    getLumajangTerbaru(res, querySql, next);
};