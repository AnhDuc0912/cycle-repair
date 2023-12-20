const express = require('express');
const session = require('express-session');
const app = express();

app.use(session({
    secret: 'DucDepZaiVCL091203@#',
    resave: false,
    saveUninitialized: true,
}));

const Booking = require('../models/Booking')

class BookingController {
    //[GET] /course
    async index(req, res) {
        res.render('pages/booking/booking');
    }

    async store(req, res) {
        const formData = req.body;
        const date = new Date(formData.date)
        const [hours, minutes] = formData.time.split(':');
        const time = new Date(formData.date).setHours(hours, minutes, 0, 0);

        const customerID = req.session.customerId;

        formData.date = date;
        formData.time = time;
        formData.idCustomer = customerID;

        const booking = Booking(formData);

        try {
            await booking.save();
            res.redirect('back')
        } catch (err) {
            // Gửi lỗi trực tiếp cho client
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }

}

module.exports = new BookingController();