const Customer = require('../models/Customers');


class CustomerController {
    async index(req, res) {
        return res.render('pages/service/services');
    }
}

module.exports = new CustomerController();