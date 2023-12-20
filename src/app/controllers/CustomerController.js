const Customer = require('../models/Customers');

class CustomerController {
    async index(req, res) {
        req.session.firstName = 'Aniruddha';
        req.session.lastName = 'Chakraborty';

        return res.send(200);
    }

    async store(req, res) {
        const formData = req.body;
        const gender = req.body.gioiTinh == 'male' ? true : false;
        req.body.gioiTinh = gender;
        const customer = Customer(formData);

        // Lưu _id vào session
        req.session.customerId = customer._id;
        req.session.authorized = true;

        try {
            customer.save()
            req.session.save();
            return res.send(req.session)
        } catch (err) {
            // Gửi lỗi trực tiếp cho client
            res.status(500).json({
                error: 'Internal Server Error',
            });
        }
    }
}

module.exports = new CustomerController();