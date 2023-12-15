const newsRouter = require('./news')
const homeRouter = require('./home')
const courseRouter = require('./course')

function route(app) {

    app.use('/', homeRouter);

    app.use('/news', newsRouter);

    app.use('/shop', courseRouter);

    app.post('/search', (req, res) => {
        res.send('');
    })
}

module.exports = route