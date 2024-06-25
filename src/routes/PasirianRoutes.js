const {readData} = require('./../controllers/PasirianController')
const express = require('express');
const router = express.Router();

router.route('/pasirian').get(readData)

module.exports = router;