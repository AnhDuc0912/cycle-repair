
class HomeConttroller {
    //[GET] /
    index(req, res) {
        res.render('home')
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }

    searchResult(req, res) {
        res.send('Search Result');
    }
}

module.exports = new HomeConttroller();