const Customer = require('../models/Customers');

const {
    ValidationError
} = require('yup');
const {
    customerSchema
} = require('../validations');


class CustomerController {
    async index(req, res) {
        req.session.firstName = 'Aniruddha';
        req.session.lastName = 'Chakraborty';

        return res.send(200);
    }

    async store(req, res) {
        const formData = req.body;
        const gender = req.body.gioiTinh == 'male' ? true : false;
        formData.gioiTinh = gender;
        const customer = Customer(formData);

        // Lưu _id vào session
        req.session.customerId = customer._id;

        try {
            customer.save()
            req.session.save();

            return res.status(201).send({customer});
        } catch (err) {
            // Gửi lỗi trực tiếp cho client
            res.status(500).json({
                error: 'Không thể thêm khách hàng',
            });
        }
    }
}

module.exports = new CustomerController();