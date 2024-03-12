module.exports = function authorizationMiddleware(req, res, next) {
    if (!req.session.user) {
        return res.redirect('/login');
    }

    next();
}