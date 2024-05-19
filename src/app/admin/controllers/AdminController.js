
class AdminController {
    async index(req, res) {
        return res.render('admin/pages/dashboard/dashboard', {layout: 'admin-layout'});
    }
}

module.exports = new AdminController();