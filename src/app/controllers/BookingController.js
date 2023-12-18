const Accessaries = require('../models/Accessaries')
const {
    multipleMongooseToObject,
    mongooseToObject
} = require('../../util/mongoose')

class BookingController {
    //[GET] /course
    async index(req, res) {
        res.render('pages/booking/booking');
    }

}

module.exports = new BookingController();