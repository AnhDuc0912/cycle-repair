
class CourseConttroller {
    //[GET] /course
    async index(req, res) {
        res.render('pages/shop');
    }
}

module.exports = new CourseConttroller();