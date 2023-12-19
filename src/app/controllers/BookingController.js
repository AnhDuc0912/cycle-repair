const Booking = require('../models/Booking')

const {
    multipleMongooseToObject,
    mongooseToObject
} = require('../../util/mongoose')

class BookingController {
    //[GET] /course
    async index(req, res) {
        res.render('pages/booking/booking');
    }

    async store(req, res) {
        const formData = res.body;
        res.send(res.body)
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