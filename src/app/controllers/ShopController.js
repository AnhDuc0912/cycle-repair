class CourseConttroller {
    //[GET] /course
    async index(req, res) {
        res.render('pages/product/product.hbs');
    }
}

module.exports = new CourseConttroller();