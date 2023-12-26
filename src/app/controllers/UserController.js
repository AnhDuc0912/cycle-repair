const Cart = require('../models/Cart');

const {
    multipleMongooseToObject,
    mongooseToObject
} = require('../../util/mongoose');
const Users = require('../models/Users');

class UserController {
    async getLogin(req, res) {
        res.render('pages/auth/login')
    }

    async login(req, res) {
        res.send('úi xời')
    }

    async getRegister(req, res) {
        res.render('pages/auth/register');
    }

    async register(req, res) {
        const formData = req.body;
        const user = Users(formData);

        try {
            user.save();
            res.send(201);
        } catch (error) {
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }


        res.send('trang thêm sản phẩm')
    }
}

module.exports = new UserController();