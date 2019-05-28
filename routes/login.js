var express = require('express');
var router = express.Router();

var login_controller = require('../controllers/loginControll');
router.get('/', login_controller.loadPage);
router.post('/', login_controller.check);

module.exports = router;