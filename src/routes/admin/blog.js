const express = require('express')
const router = express.Router()

const AdminServiceController = require("../../app/admin/controllers/AdminBlogController")

router.get("/create", AdminServiceController.create);
router.post("/create", AdminServiceController.store);
router.post("/scrape", AdminServiceController.scrape);
router.get("/", AdminServiceController.index);

module.exports = router