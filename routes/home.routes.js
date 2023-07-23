const homeController = require('../controllers/home.controller');
const router = require('express').Router();

// Get requests for Home 
router.get('/', homeController.getHome);


// post request for products 
router.post('/', homeController.postHome);

module.exports = router;