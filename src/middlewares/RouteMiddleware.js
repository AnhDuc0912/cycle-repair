// middleware.js
module.exports = function (req, res, next) {
    res.locals.url = function (route) {
        // Điều này có thể cần được điều chỉnh tùy thuộc vào cách bạn thiết lập ứng dụng Express
        return `${req.protocol}://${req.get('host')}${route}`;
    };
    next();
};