const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

const AdminController = require('../../app/admin/controllers/AdminController')

const dashboardRouter = require('./dashboard');
const serviceRouter = require('./service');

router.use('/dashboard', dashboardRouter);
router.use('/service', serviceRouter);

//Admin service
router.post('/upload', upload.single('upload'), AdminController.upload);

module.exports = router;