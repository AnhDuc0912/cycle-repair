const notificationMiddleware = require('./notificationMiddleware')
const addFooterData = require('./addFooterDataMiddleware')

module.exports = function (app) {
    app.use(notificationMiddleware)

    app.use(addFooterData)
}