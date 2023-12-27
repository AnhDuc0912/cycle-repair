const notificationMiddleware = require('./notificationMiddleware')

module.exports = function (app) {
    app.use(notificationMiddleware)
}