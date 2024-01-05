const Cart = require('../models/Cart');

const {
    multipleMongooseToObject,
    mongooseToObject
} = require('../../util/mongoose');

class CartController {
    //[GET] /course
    async index(req, res) {
        const userId = req.session.user.user._id;
        const cart = await Cart.find({userId});

        try {
            res.send({cart})
            // res.render('pages/cart/cart', cart);
        } catch (error) {
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }

    async detail(req, res) {
        res.send('chi tiết sản phẩm')
    }
    
    async store(req, res) {
        const formData = req.body;
        const userId = req.session.user.user._id;

        formData.userId = userId;

        const cart = new Cart(formData);
        
        try {
            await cart.save();
            req.session.notification = {
                type: 'success',
                message: 'Thêm vào giỏ hàng thành công!'
            };

            res.redirect('/shop');
        } catch (err) {
            req.session.notification = {
                type: 'error',
                message: 'Có lỗi xảy ra khi thêm vào giỏ hàng!'
            };
            // Gửi lỗi trực tiếp cho client
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }
}

module.exports = new CartController();