var express = require('express');
var router = express.Router();

var forgot_controller = require('../controllers/forgot_passControll');
router.get('/', forgot_controller.loadPage);

module.exports = router;