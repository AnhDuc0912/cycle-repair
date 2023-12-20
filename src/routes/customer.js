const express = require('express')
const router = express.Router()

const customerController = require('../app/controllers/CustomerController');

router.post('/create-new-customer', customerController.store);
router.get('/create-new-customer', (req, res) => {
    console.log(req.session.authorized);

    return res.send(req.session)
})

module.exports = router