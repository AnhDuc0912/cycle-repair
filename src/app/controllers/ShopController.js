const Accessaries = require('../models/Accessaries')
const paginate = require('express-paginate')

const {
    multipleMongooseToObject,
    mongooseToObject
} = require('../../util/mongoose');
const Shop = require('../models/Shop');
const UserController = require('./UserController');

class ShopController {
    //[GET] /course
    async index(req, res, next) {
        try {
            const [results, itemCount] = await Promise.all([
                Accessaries.find({}).limit(req.query.limit).skip(req.skip).lean().exec(),
                Accessaries.countDocuments()
            ])

            const pageCount = Number.parseInt(Math.ceil(itemCount / req.query.limit));

            res.render('pages/product/product', {
                product: results,
                pageCount,
                itemCount,
                pages: paginate.getArrayPages(req)(3, pageCount, req.query.page)
            });
        } catch (err) {
            next(err);
        }
    }

    async detail(req, res) {
        res.send('chi tiết sản phẩm')
    }

    async create(req, res) {
        res.send('trang thêm sản phẩm')
    }

    //function to test adding something
    async store(req, res, next) {
        const formData = req.body;
        const product = new Shop(formData);

        try {
            await product.save();
            res.send(product)
        } catch (err) {
            res.status(500).json({
                error: 'Internal Server Error'
            });
        }
    }
}

module.exports = new ShopController();