var express = require('express');
var router = express.Router();

var orders_controller = require('../controllers/ordersControll');
router.get('/', orders_controller.loadPage);

module.exports = router;
