class AdminController {
    async index(req, res) {
        return res.render('admin/pages/dashboard/dashboard', {
            layout: 'admin-layout'
        });
    }

    async upload(req, res, next) {
        const file = req.file;

        if (!file) {
            return res.status(400).send('No file uploaded.');
        }

        res.status(200).json({
            url: `http://localhost:3000/admin/upload/${file.filename}`
        });
    }
}

module.exports = new AdminController();