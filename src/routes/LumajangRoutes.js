const {readData, createData, lumajangTerbaru} = require('./../controllers/LumajangController')
const express = require('express');
const router = express.Router();

router.route('./lumajang').post(createData).get(readData)
router.route('./lumajang/terbaru').get(lumajangTerbaru)

module.exports = router;