const Accessaries = require('../models/Accessaries')

const {
    multipleMongooseToObject,
    mongooseToObject
} = require('../../util/mongoose');
const Shop = require('../models/Shop');

class CartController {
    //[GET] /course
    async index(req, res) {
        // const product = await Accessaries.find({});

        res.render('pages/cart/cart');
    }

    async detail(req, res) {
        res.send('chi tiết sản phẩm')
    }

    async create(req, res) {
        res.send('trang thêm sản phẩm')
    }

    async store(req, res, next) {
        const formData = req.body;
        const product = new Cart(formData);

        try {
            await product.save();
            res.send(product)
        } catch (err) {
            // Gửi lỗi trực tiếp cho client
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }
}

module.exports = new CartController();