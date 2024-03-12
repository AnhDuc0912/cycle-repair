
class AdminController {
    async index(req, res) {
        return res.render('admin/pages/dashboard/dashboard');
    }
}

module.exports = new AdminController();