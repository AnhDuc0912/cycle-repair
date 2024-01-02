const express = require('express')
const router = express.Router()

const homeConttroller = require('../../app/controllers/HomeController');
const userController = require('../../app/controllers/UserController');

const validation = require('../../app/middlewares/validationMiddleware');
const {
    loginShema
} = require('../../app/validations');

router.post('/logout', userController.logout);
router.post('/login', validation(loginShema), userController.login);
router.post('/register', userController.register);
router.get('/login', userController.getLogin);
router.get('/register', userController.getRegister);
router.get('/search', homeConttroller.search);
router.post('/search', homeConttroller.searchResult);
router.get('/', homeConttroller.index);


module.exports = router