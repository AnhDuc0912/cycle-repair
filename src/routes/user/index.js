const express = require('express');
const router = express.Router();

const cartRouter = require('./cart');
const wishlistRouter = require('./wishlist')

router.use('/wishlist', wishlistRouter);
router.use('/cart', cartRouter);

module.exports = router;