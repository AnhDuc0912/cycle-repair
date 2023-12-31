const anonymousRouter = require('./anonymous')
const userRouter = require('./user')

const authorizationMiddleware = require('../app/middlewares/authorizationMiddleware');

function route(app) {
    app.use('/', anonymousRouter);

    app.use('/my', authorizationMiddleware, userRouter);
}

module.exports = route