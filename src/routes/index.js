const homeRouter = require('./home')
const productRouter = require('./product')

function route(app) {

    app.use('/', homeRouter);

    app.use('/product', productRouter);

    app.post('/search', (req, res) => {
        res.send('');
    })
}

module.exports = route