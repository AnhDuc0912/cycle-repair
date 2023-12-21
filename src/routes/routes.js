const homeRouter = require('./home')
const productRouter = require('./shop')
const bookingRouter = require('./booking')
const customerRouter = require('./customer');

function route(app) {
    app.use('/', homeRouter);

    app.use('/shop', productRouter);

    app.use('/booking', bookingRouter);

    app.use('/customer', customerRouter)

    app.post('/search', (req, res) => {
        res.send('');
    })
}

module.exports = route