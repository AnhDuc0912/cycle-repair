const homeRouter = require('./home')
const productRouter = require('./shop')
const bookingRouter = require('./booking')

function route(app) {

    app.use('/', homeRouter);

    app.use('/shop', productRouter);

    app.use('/booking', bookingRouter);

    app.post('/search', (req, res) => {
        res.send('');
    })
}

module.exports = route