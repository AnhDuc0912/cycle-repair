
class HomeConttroller {
    //[GET] /
    index(req, res) {
        res.render('pages/home')
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