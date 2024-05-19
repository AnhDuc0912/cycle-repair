const express = require('express');
const router = express.Router();

const dashboardRouter = require('./dashboard');
const serviceRouter = require('./service');


router.use('/dashboard', dashboardRouter);
router.use('/service', serviceRouter);

module.exports = router;