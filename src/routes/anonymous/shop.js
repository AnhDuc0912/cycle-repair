const express = require('express')
const router = express.Router()

const shopController = require('../../app/controllers/ShopController');

router.get('/create-new-product', shopController.create)
router.post('/create-new-product', shopController.store)
router.get('/:slug', shopController.detail)
router.get('/', shopController.index);

module.exports = router