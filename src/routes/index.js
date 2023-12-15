const homeRouter = require('./home')
const shopRouter = require('./shop')

function route(app) {

    app.use('/', homeRouter);

    app.use('/shop', shopRouter);

    app.post('/search', (req, res) => {
        res.send('');
    })
}

module.exports = route