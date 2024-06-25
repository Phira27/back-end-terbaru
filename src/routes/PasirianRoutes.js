const {readData, createData} = require('./../controllers/PasirianController')
const express = require('express');
const router = express.Router();

router.route('/pasirian').post(createData).get(readData)

module.exports = router;