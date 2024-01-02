module.exports = function authorizationMiddleware(req, res, next) {
    if(!req.cookies.token){
        return res.redirect('/login');
    }

    next();
}