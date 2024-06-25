const db = require('../config/connectionDB')
const ErrorResponse = require('../utils/ErrorResponse')
const { responseData, responseMessage } = require('../utils/responHandler')

exports.insertSenduro = (response, statement, data, next) => {
    db.query(statement, data, (err, rows, fields) =>{
        if(err) {
            return next(new ErrorResponse(err.message, 500))
        }
        responseMessage(response, 201, 'Data Behasil Di Tambahkan')
    })
}

exports.getSenduro = (response, statement) => {
    db.query(statement, (err, rows, fields) =>{
        if(err){
            return response.status(500).json({
                message: 'Ada kesalahan server', 
                error: err
            })
        }
        responseData(response, 200, rows)
    })
}
