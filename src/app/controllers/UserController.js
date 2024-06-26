const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Users = require('../models/Users');
const Roles = require('../models/Roles');
const sendEmail = require('../../util/mailer')

class UserController {
    async getLogin(req, res) {
        res.render('pages/auth/login')
    }

    async login(req, res, next) {
        const email = req.body.email;
        const enteredPassword = req.body.password;

        try {
            // Lấy người dùng từ cơ sở dữ liệu dựa trên số điện thoại
            const user = await Users.aggregate([{
                $lookup: {
                    from: "roles",
                    localField: "role",
                    foreignField: "_id",
                    as: "role"
                }
            }, {
                $unwind: "$role"
            }, {
                $match: {
                    "email": email
                }
            }]);

            if (!user.length > 0) {
                return res.status(404).send({
                    error: 'User not found'
                });
            }

            // So sánh mật khẩu
            const passwordMatch = await bcrypt.compare(enteredPassword, user[0].password);

            if (passwordMatch) {
                const token = jwt.sign({
                    user: user[0]
                }, process.env.SESSION_SECRET, {
                    expiresIn: '1d'
                });

                res.cookie('token', token);

                if (user[0].role.title !== 'USER') {
                    res.redirect('/admin');
                } else {
                    res.redirect('/');
                }

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
        const role = Roles.findOne({title: 'USER'})
        formData.role = role._id;

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
        res.send("forget pasword")
    }

    postForgetPassword(req, res, next) {
        const email = req.body.email;
        console.log(email);
        res.send("forget pasword")
    }

    async sendEmailToRestorePassword(req, res, next) {
        try {
            const email = req.body.email;

            await sendEmail(email, 'Test Email', '<h2 style: {color: red}>Khánh Ly xinh gái</h2>');
            res.status(200);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();