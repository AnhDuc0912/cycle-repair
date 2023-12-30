module.exports = function authorizationMiddleware(req, res, next) {
    if (!req.session.authorized) {
        return res.redirect('/login');
    }

    next();
}