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
        formData.status = false;

        const booking = Booking(formData);

        try {
            await booking.save();
            req.session.notification = {
                type: 'success',
                message: 'Đặt lịch thành công!'
            };
            return res.redirect('back')
        } catch (error) {
            req.session.notification = {
                type: 'error',
                message: 'Có lỗi xảy ra khi đặt lịch!'
            };
            res.status(500).json({
                error
            });
        }
    }

}

module.exports = new BookingController();