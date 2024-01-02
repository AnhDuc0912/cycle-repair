const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Users = require('../models/Users');

class UserController {
    async getLogin(req, res) {
        res.render('pages/auth/login')
    }

    async login(req, res, next) {
        const email = req.body.email;
        const enteredPassword = req.body.password;

        try {
            // Lấy người dùng từ cơ sở dữ liệu dựa trên số điện thoại
            const user = await Users.findOne({
                email
            });

            if (!user) {
                return res.status(404).send({
                    error: 'User not found'
                });
            }

            // So sánh mật khẩu
            const passwordMatch = await bcrypt.compare(enteredPassword, user.password);

            if (passwordMatch) {
                const token = jwt.sign({
                    user
                }, 'DucDepZaiVCL091203@#', {
                    expiresIn: '1d'
                });

                res.cookie('token', token); // Lưu token vào cookie
                res.redirect('/');
            } else {
                res.status(401).send({
                    error: 'Invalid password'
                });
            }
        } catch (error) {
            next(error)
        }
    }

    async getRegister(req, res) {
        res.render('pages/auth/register');
    }

    async register(req, res, next) {
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
            next(error)
        }
    }

    logout(req, res, next) {
        try {
            res.clearCookie('token');

            res.redirect('back')
        } catch (error) {
            next(error)
        }
    }

    forgetPassword(req, res, next) {

    }
}

module.exports = new UserController();