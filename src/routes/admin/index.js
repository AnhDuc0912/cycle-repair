const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

const AdminController = require('../../app/admin/controllers/AdminController')

const dashboardRouter = require('./dashboard');
const serviceRouter = require('./service');

router.use('/dashboard', dashboardRouter);
router.use('/service', serviceRouter);

//Admin service
router.post('/upload', upload.single('upload'), AdminController.upload);
router.get('/', AdminController.dasboard)

module.exports = router;