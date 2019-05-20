var express = require('express');
var router = express.Router();

var home_controller = require('../controllers/homeControll');
router.get('/', home_controller.loadPage);

module.exports = router;