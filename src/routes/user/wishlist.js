const express = require('express')
const router = express.Router()

const wishlistController = require('../../app/controllers/WishlistController')

router.get('/', wishlistController.index);
router.post('/add-to-wishlist', wishlistController.store)

module.exports = router