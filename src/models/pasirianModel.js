const db = require('../config/connection')
const { responseData, responseMessage } = require('../utils/responHandler')

exports.getPasirian = (response, statement) => {
    db.query(statement, (err, rows, fields) =>{
        if(err){
            return response.status(500).json( {message: 'Ada kesalahan server', error: err} )
        }
        responseData(response, 200, rows)
    })
}
