const express = require('express')
const router = express.Router()

const bookingController = require('../app/controllers/BookingController');

router.get('/', bookingController.index);

module.exports = router