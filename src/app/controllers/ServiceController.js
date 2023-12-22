const Customer = require('../models/Customers');

const {
    ValidationError
} = require('yup');
const {
    customerSchema
} = require('../validations');


class CustomerController {
    async index(req, res) {
        return res.render('pages/service/services');
    }
}

module.exports = new CustomerController();