const express = require('express')
const router = express.Router()

const homeConttroller = require('../app/controllers/HomeController')

router.get('/', homeConttroller.index);
router.get('/search', homeConttroller.search);
router.post('/search', homeConttroller.searchResult);


module.exports = router
