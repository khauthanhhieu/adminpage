var express = require('express');
var router = express.Router();

var login_controller = require('../controllers/loginControll');
router.get('/', login_controller.loadPage);

module.exports = router;