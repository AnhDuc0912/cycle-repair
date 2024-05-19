const express = require('express')
const router = express.Router()

const AdminServiceController = require("../../app/admin/controllers/AdminServiceController")

router.get("/create", AdminServiceController.create);
router.post("/scrape", AdminServiceController.scrape);
router.get("/", AdminServiceController.index);

module.exports = router