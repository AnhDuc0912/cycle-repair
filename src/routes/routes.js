const anonymousRouter = require('./anonymous')
const userRouter = require('./user')

const authenticateTokenMiddleware = require('../app/middlewares/authenticateTokenMiddleware');

function route(app) {
    app.use('/', anonymousRouter);

    app.use('/my', authenticateTokenMiddleware, userRouter);
}

module.exports = route