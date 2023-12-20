// middleware/notification.js
module.exports = function notificationMiddleware(req, res, next) {
    res.locals.notification = req.session.notification;
    req.session.notification = null;
    next();
}
