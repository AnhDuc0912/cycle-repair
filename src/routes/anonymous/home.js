const express = require('express')
const router = express.Router()

const homeConttroller = require('../../app/controllers/HomeController');
const userController = require('../../app/controllers/UserController');

const validation = require('../../app/middlewares/validationMiddleware');
const {
    loginShema,
    registerSchema
} = require('../../app/validations');

router.post('/forget-password', userController.sendEmailToRestorePassword);
router.get('/forget-password', userController.forgetPassword);
router.post('/logout', userController.logout);
router.post('/login', validation(loginShema), userController.login);
router.post('/register', validation(registerSchema), userController.register);
router.get('/login', userController.getLogin);
router.get('/register', userController.getRegister);
router.get('/search', homeConttroller.search);
router.post('/search', homeConttroller.searchResult);
router.get('/', homeConttroller.index);


module.exports = router