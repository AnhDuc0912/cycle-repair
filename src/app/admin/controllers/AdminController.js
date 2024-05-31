class AdminController {
    async dasboard(req, res){
        res.redirect("/admin/dashboard");
    }

    async index(req, res) {
        return res.render('admin/pages/dashboard/dashboard', {
            layout: 'admin-layout'
        });
    }

    async upload(req, res, next) {
        const file = req.file;

        try {
            if (!file) {
                return res.status(400).send('No file uploaded.');
            }
    
            return res.status(200).json({
                uploaded: true,
                url: `http://127.0.0.1:8000/uploads/${file.filename}`
            });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new AdminController();