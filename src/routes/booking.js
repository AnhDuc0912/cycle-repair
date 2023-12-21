const express = require('express')
const router = express.Router()

const validation = require('../app/middlewares/validationMiddleware');
const {
    bookingSchema
} = require('../app/validations');

const bookingController = require('../app/controllers/BookingController');

router.post('/create-new-booking', validation(bookingSchema), bookingController.store);
router.get('/', bookingController.index);

module.exports = router