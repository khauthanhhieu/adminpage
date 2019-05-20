var express = require('express');
var router = express.Router();

var statistics_controller = require('../controllers/statisticsControll');

router.get('/sales', statistics_controller.loadPageSales);
router.get('/quantity', statistics_controller.loadPageQuantity);

module.exports = router;