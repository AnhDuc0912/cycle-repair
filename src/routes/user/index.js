const express = require('express');
const router = express.Router();

const cartRouter = require('./cart');

router.use('/cart', cartRouter);

module.exports = router;