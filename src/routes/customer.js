const express = require('express')
const router = express.Router()

const customerController = require('../app/controllers/CustomerController');

router.post('/create-new-customer', customerController.store);

module.exports = router