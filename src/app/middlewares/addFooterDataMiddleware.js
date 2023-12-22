module.exports = function addFooterData(req, res, next) {
    res.locals.shop = req.session.shop;
    console.log(res.locals.shop);
    next();
};