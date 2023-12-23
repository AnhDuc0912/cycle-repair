const homeRouter = require('./home')
const productRouter = require('./shop')
const bookingRouter = require('./booking')
const customerRouter = require('./customer')
const serviceRouter = require('./service')
const cartRouter = require('./cart')

function route(app) {
    app.use('/', homeRouter);

    app.use('/shop', productRouter);

    app.use('/booking', bookingRouter);

    app.use('/customer', customerRouter);

    app.use('/service', serviceRouter);

    app.use('/cart', cartRouter);

    app.post('/search', (req, res) => {
        res.send('');
    })
}

module.exports = route