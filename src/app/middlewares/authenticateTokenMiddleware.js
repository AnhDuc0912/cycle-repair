const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return next();
    }

    jwt.verify(token, 'DucDepZaiVCL091203@#', (err, user) => {
        if (err) {
            return res.status(403).send({
                error: 'Forbidden: Invalid token'
            });
        }

        req.user = user;
        res.locals = user;

        next();
    });
}

module.exports = authenticateToken;