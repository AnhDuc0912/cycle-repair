const anonymousRouter = require('./anonymous')
const userRouter = require('./user')
const adminRouter = require('./admin')

const authorizationMiddleware = require('../app/middlewares/authorizationMiddleware');
const permitMiddleware = require('../app/middlewares/permitMiddleware');


function route(app) {
    app.use('/', anonymousRouter);

    app.use('/my', authorizationMiddleware, userRouter);

    app.use('/admin', authorizationMiddleware, permitMiddleware("MANAGER"), adminRouter);
}

module.exports = route