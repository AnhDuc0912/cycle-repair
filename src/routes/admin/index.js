const express = require('express');
const router = express.Router();

const dashboardRouter = require('./dashboard');

router.use('/dashboard', dashboardRouter);

module.exports = router;