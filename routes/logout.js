var express = require('express');
var router = express.Router();

var logout_controller = require('../controllers/logoutController');
router.get('/', logout_controller.loadPage);

module.exports = router;