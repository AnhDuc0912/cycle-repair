const Accessaries = require('../models/Accessaries')
const Services = require('../models/Services')
const {
  multipleMongooseToObject,
  mongooseToObject
} = require("../../util/mongoose");
const Shop = require('../models/Shop');

class HomeConttroller {
  //[GET] / 
  index(req, res, next) {
    //get4ccessaries
    Promise.all([Accessaries.find({}).sort({
        createdAt: -1
      }).limit(4), Shop.findOne()])
      .then(([accessories, shop]) => {
        res.render('pages/home', {
          accessories: multipleMongooseToObject(accessories),
          shop: mongooseToObject(shop)
        });
        req.session.shop = shop;
      })
      .catch(next);
    try {
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