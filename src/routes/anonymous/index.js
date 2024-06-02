const express = require('express');
const router = express.Router();

const homeRouter = require('./home');
const productRouter = require('./shop');
const bookingRouter = require('./booking');
const customerRouter = require('./customer');
const serviceRouter = require('./service');
const blogsRouter = require('./blog')

router.use('/', homeRouter);
router.use('/shop', productRouter);
router.use('/booking', bookingRouter);
router.use('/customer', customerRouter);
router.use('/service', serviceRouter);
router.use('/blogs', blogsRouter)   

router.post('/seach', (req, res) => {
    res.send('');
});

module.exports = router;