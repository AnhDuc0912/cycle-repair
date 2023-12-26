const Accessaries = require('../models/Accessaries')
const Services = require('../models/Services')
const {
  multipleMongooseToObject,
  mongooseToObject
} = require("../../util/mongoose");
const Shop = require('../models/Shop');

class HomeConttroller {
  //[GET] / 
  async index(req, res, next) {
    //get4ccessaries
    const accessories = await Accessaries.find().sort({
      createAt: -1
    }).limit(4);
    try {
      res.render('pages/home', {
        accessories: multipleMongooseToObject(accessories),
      });
    } catch (error) {
      // Gửi lỗi trực tiếp cho client
      res.status(500).json({
        error
      });
    }
  }

  async getDataFooter(req, res) {
    const contact = await Shop.findOne();
    console.log();

    try {
      res.status(200).send({
        contact: mongooseToObject(contact)
      })
    } catch (error) {
      res.status(500).json({
        error
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