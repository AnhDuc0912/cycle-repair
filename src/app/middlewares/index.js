const authorizationMiddleware = require('./authenticationMiddleware')
const errorMiddleware = require('./errorMiddleware')
const notificationMiddleware = require('./notificationMiddleware')

module.exports = function (app) {
    app.use(notificationMiddleware)

    app.use(authorizationMiddleware)

    app.use(errorMiddleware)
}