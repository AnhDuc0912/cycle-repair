const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
    const token = req.cookies.token;
    

    if (!token) {
        return next();
    }

    jwt.verify(token, process.env.SESSION_SECRET, (err, user) => {
        if (err) {
            return res.status(403).send({
                error: 'Forbidden: Invalid token'
            });
        }
        
        req.session.user = user;
        res.locals = req.session.user;

        next();
    });
}

module.exports = authenticateToken;