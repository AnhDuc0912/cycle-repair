const bcrypt = require('bcrypt');
const Users = require('../models/Users');

const {
    multipleMongooseToObject,
    mongooseToObject
} = require('../../util/mongoose');

class UserController {
    async getLogin(req, res) {
        res.render('pages/auth/login')
    }

    async login(req, res) {
        const phone = req.body.phone;
        const enteredPassword = req.body.password;

        try {
            // Lấy người dùng từ cơ sở dữ liệu dựa trên số điện thoại
            const user = await Users.findOne({
                phone
            });

            if (!user) {
                return res.status(404).send({
                    error: 'User not found'
                });
            }

            // So sánh mật khẩu
            const passwordMatch = await bcrypt.compare(enteredPassword, user.password);

            if (passwordMatch) {
                req.session.user = user;
                req.session.authorized = true;

                res.redirect('/')
            } else {
                res.status(401).send({
                    error: 'Invalid password'
                });
            }
        } catch (error) {
            res.status(500).send({
                error: 'Login failed'
            });
        }
    }

    async getRegister(req, res) {
        res.render('pages/auth/register');
    }

    async register(req, res) {
        const formData = req.body;

        try {
            // Tạo salt
            const saltRounds = 10;
            const salt = await bcrypt.genSalt(saltRounds);

            // Băm mật khẩu với salt
            const hashedPassword = await bcrypt.hash(formData.password, salt);

            // Lưu hashedPassword vào cơ sở dữ liệu
            formData.password = hashedPassword;
            const user = new Users(formData);
            await user.save();

            res.redirect('back')
        } catch (error) {
            res.status(500).send({
                error
            });
        }
    }

    logout(req, res) {
        try {
            req.session.user = null;
            req.session.authorized = false;


            res.redirect('back')
        } catch (error) {
            res.status(500).send({
                error
            });
        }
    }
}

module.exports = new UserController();