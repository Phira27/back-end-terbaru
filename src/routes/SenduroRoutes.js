const {readData, createData} = require('./../controllers/SenduroController')
const express = require('express');
const router = express.Router();

router.route('/senduro').post(createData).get(readData)

module.exports = router;