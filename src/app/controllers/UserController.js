const Cart = require('../models/Cart');

const {
    multipleMongooseToObject,
    mongooseToObject
} = require('../../util/mongoose');

class UserController {
    async getLogin(req, res) {
        res.send('Trang đăng nhập!')
    }

    async login(req, res) {
        res.send('úi xời')
    }

    async detail(req, res) {
        res.send('chi tiết sản phẩm');
    }

    async getRegister(req, res) {
        res.send('trang đăng ký!');
    }

    async register(req, res) {
        res.send('trang thêm sản phẩm')
    }
}

module.exports = new UserController();