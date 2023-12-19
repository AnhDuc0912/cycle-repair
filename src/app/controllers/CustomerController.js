const Customer = require('../models/Customers')

const {
    multipleMongooseToObject,
    mongooseToObject
} = require('../../util/mongoose')

class CustomerController {

    async store(req, res) {
        const formData = res.body;
        res.send(res.body)

        const customer = Customer(formData);

        try {
            await customer.save();
            res.redirect('back')
            
        } catch (err) {
            // Gửi lỗi trực tiếp cho client
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }

}

module.exports = new CustomerController();