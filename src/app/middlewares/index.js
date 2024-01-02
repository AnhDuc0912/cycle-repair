const authenticateToken = require('./authenticateTokenMiddleware')
const errorMiddleware = require('./errorMiddleware')
const notificationMiddleware = require('./notificationMiddleware')

module.exports = function (app) {
    app.use(notificationMiddleware)

    app.use(authenticateToken)

    app.use(errorMiddleware)
}