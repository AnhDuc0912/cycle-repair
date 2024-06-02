const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.session.authorized);

    return res.render('pages/blogs/blogs');
})

module.exports = router