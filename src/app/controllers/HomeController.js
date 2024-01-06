const mongoose = require("../../util/mongoose");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../util/mongoose");

const Accessaries = require('../models/Accessaries')
const Shop = require('../models/Shop')

class HomeConttroller {
  //[GET] / 
  async index(req, res, next) {
    try {
      //get4ccessaries
      const accessaries = await Accessaries.find({}).sort({
        createdAt: -1
      }).limit(4)

      res.render('pages/home/home', {
        accessories: multipleMongooseToObject(accessaries)
      });
    } catch (error) {
      next(error)
    }
  }
  //[GET] /search
  search(req, res) {
    res.render('pages/search');
  }

  searchResult(req, res) {
    res.send('Search Result');
  }

  async getFooter(req, res) {
    const contact = await Shop.findOne();
    res.status(200).json({contact: mongoose.mongooseToObject(contact)});
  }
}

module.exports = new HomeConttroller();