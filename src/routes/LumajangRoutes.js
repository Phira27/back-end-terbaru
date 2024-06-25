const {readData, createData} = require('./../controllers/LumajangController')
const express = require('express');
const router = express.Router();

router.route('/lumajang').post(createData).get(readData)

module.exports = router;