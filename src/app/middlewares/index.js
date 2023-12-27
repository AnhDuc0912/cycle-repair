const authorizationMiddleware = require('./authorizationMiddleware')
const notificationMiddleware = require('./notificationMiddleware')

module.exports = function (app) {
    app.use(notificationMiddleware)

    app.use(authorizationMiddleware)
}