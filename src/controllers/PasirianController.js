const {getPasirian} = require('./../models/pasirianModel')

exports.readData = (req, res) => {
    const querySql = 'SELECT * FROM Lumajang';

    getPasirian(res, querySql)
}