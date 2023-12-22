const Accessaries = require('../models/Accessaries')
const Services = require('../models/Services')
const {
    multipleMongooseToObject,
    mongooseToObject
} = require('../../util/mongoose');
const Shop = require('../models/Shop');

class ShopController {
    //[GET] /course
    async index(req, res) {
        res.render('pages/product/product.hbs');
    }

    async create(req, res) {
        res.send('trang thêm sản phẩm')
    }

    async store(req, res, next) {
        const formData = req.body;
        const product = new Shop(formData);

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

module.exports = new ShopController();