const express = require('express')
const router = express.Router()

const cartController = require('../../app/controllers/CartController')

router.get('/', cartController.index);
router.post('/add-to-cart', cartController.store)

module.exports = router