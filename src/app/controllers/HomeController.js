const {
  multipleMongooseToObject,
} = require("../../util/mongoose");

const Accessaries = require('../models/Accessaries')

class HomeConttroller {
  //[GET] / 
  async index(req, res, next) {
    try {
      //get4ccessaries
      const accessaries = await Accessaries.find({}).sort({
        createdAt: -1
      }).limit(4)

      res.render('pages/home', {
        accessories: multipleMongooseToObject(accessaries)
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