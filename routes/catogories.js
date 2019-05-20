var express = require('express');
var router = express.Router();

var catogories_controller = require('../controllers/categoriesControll');
router.get('/', catogories_controller.loadPage);

module.exports = router;
