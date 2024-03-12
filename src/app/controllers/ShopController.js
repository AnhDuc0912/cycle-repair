const Accessaries = require('../models/Accessaries')
const paginate = require('express-paginate')

const {
    multipleMongooseToObject,
    mongooseToObject
} = require('../../util/mongoose');
const Roles = require('../models/Roles');
const UserController = require('./UserController');
const Permissions = require('../models/Permissions');

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
        const permit = await Permissions.find({
            title: "ROOT"
        })
        formData.permissions = permit;
        const product = new Roles(formData);
        console.log(product);

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