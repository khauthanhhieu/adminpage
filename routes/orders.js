var express = require('express');
var router = express.Router();

var orders_controller = require('../controllers/ordersControll');
router.get('/', orders_controller.loadPage);
router.get('/confirm/:id', orders_controller.confirm);
router.get('/confirm-delivery/:id', orders_controller.confirmDelivery);
router.get('/detail/:id', orders_controller.detail);

module.exports = router;