let express = require('express');
let router = express.Router();
//var mainController = require('../controllers/main');
let locationController = require('../controllers/location');
let othersController = require('../controllers/others');

/* GET home page. */
//router.get('/', mainController.index);

//Location pages
router.get('/', locationController.locationList);
router.get('/location', locationController.locationInfo);
router.get('/location/review/new', locationController.addReview);


//Other pages
router.get('/about', othersController.about);

module.exports = router;
