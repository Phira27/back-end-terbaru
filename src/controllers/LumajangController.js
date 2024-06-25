const { insertLumajang, getLumajang } = require('../models/lumajangModel');
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
    // Query SQL untuk mengambil semua data dari tabel lumajang
    const querySql = 'SELECT * FROM lumajang';

    // Mengambil data dari basis data menggunakan fungsi getlumajang
    getLumajang(res, querySql, next);
};
