module.exports = function notificationMiddleware(req, res, next) {
    res.locals.notification = req.session.notification;
    delete req.session.notification;
    
    next();
}
