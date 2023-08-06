const express = require("express");
const homeController = require("../controllers/home.controller");
const router = express.Router();

// GET request for Home
router.get("/", homeController.getHome);

// POST request for form submissions
router.post("/", homeController.postFormDetails);

module.exports = router;
