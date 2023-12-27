const {
  multipleMongooseToObject,
  mongooseToObject
} = require("../../util/mongoose");

const Accessaries = require('../models/Accessaries')
const Users = require('../models/Users');

class HomeConttroller {
  //[GET] / 
  index(req, res, next) {
    const userID = req.session.userId;

    //get4ccessaries
    Promise.all([Accessaries.find({}).sort({
      createdAt: -1
    }).limit(4), Users.findOne({
      _id: userID
    })])
      .then(([accessories, user]) => {

        res.render('pages/home', {
          accessories: multipleMongooseToObject(accessories),
          user: mongooseToObject(user)
        });

      })
      .catch(next);
    try { } catch (error) {
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