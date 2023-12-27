module.exports = function authorizationMiddleware(req, res, next) {
    res.locals.user = req.session.user;
    next();
}