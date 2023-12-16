const homeRouter = require('./home')
const productRouter = require('./shop')

function route(app) {

    app.use('/', homeRouter);

    app.use('/shop', productRouter);

    app.post('/search', (req, res) => {
        res.send('');
    })
}

module.exports = route