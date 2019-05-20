var express = require('express');
var router = express.Router();

var products_controller = require('../controllers/productsControll');
router.get('/', products_controller.loadPage);

module.exports = router;
