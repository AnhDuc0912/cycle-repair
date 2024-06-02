const Wishlist = require('../models/Wishlist');

const {
    multipleMongooseToObject,
    mongooseToObject
} = require('../../util/mongoose');

class WishlistController {
    //[GET] /course
    async index(req, res) {
        const userId = req.session.user.user_id;
        const wishlist = await Wishlist.find({
            userId
        });

        const products = [];

        for (const wishlistItem of wishlist) {
            const product = await Accessaries.findById(wishlistItem.productId);
            if (product) {
                products.push(product);
            }
        }

        try {

            res.render('pages/wishlist/wishlist', {
                products: multipleMongooseToObject(products)
            });
        } catch (error) {
            next(error)
        }
    }

    async detail(req, res) {
        res.send('chi tiết sản phẩm')
    }

    async store(req, res) {
        const formData = req.body;
        const userId = req.session.user._id;

        formData.userId = userId;

        const wishlist = new Wishlist(formData);

        try {
            await wishlist.save();
            req.session.notification = {
                type: 'success',
                message: 'Thêm vào giỏ hàng thành công!'
            };
            res.redirect('back');
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

module.exports = new WishlistController();