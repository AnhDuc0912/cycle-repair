const Accessaries = require('../models/Accessaries')
const Services = require('../models/Services')
const {
    mongooseToObject, multipleMongooseToObject
} = require("../../util/mongoose");

class HomeConttroller {
    //[GET] / 
    async index(req, res) {
        //get4ccessaries
        try {
            const accessories = await Accessaries.find({}).sort({createdAt: -1}).limit(4);
            const services = await Services.find({});
            res.render('pages/home', {
              accessories: multipleMongooseToObject(accessories, services)
            });
          } catch (error) {
            // Gửi lỗi trực tiếp cho client
            res.status(500).json({
              error: 'Internal Server Error'
            });
          }
    }
    //[GET] /search
    search(req, res) {
        res.render('pages/search');
    }

    searchResult(req, res) {
        res.send('Search Result');
    }
}

module.exports = new HomeConttroller();