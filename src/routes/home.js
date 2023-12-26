const express = require('express')
const router = express.Router()

const homeConttroller = require('../app/controllers/HomeController')

router.get('/footer', homeConttroller.getDataFooter)
router.get('/search', homeConttroller.search);
router.post('/search', homeConttroller.searchResult);
router.get('/', homeConttroller.index);


module.exports = router
