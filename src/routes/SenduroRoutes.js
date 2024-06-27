const {readData, createData, senduroTerbaru} = require('./../controllers/SenduroController')
const express = require('express');
const router = express.Router();

router.route('/senduro').post(createData).get(readData)
router.route('/senduro/terbaru').get(senduroTerbaru)


module.exports = router;