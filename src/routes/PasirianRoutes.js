const {readData, createData, pasirianTerbaru} = require('./../controllers/PasirianController')
const express = require('express');
const router = express.Router();

router.route('./pasirian').post(createData).get(readData)
router.route('./pasirian/terbaru').get(pasirianTerbaru)
module.exports = router;