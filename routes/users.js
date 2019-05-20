var express = require('express');
var router = express.Router();

var users_controller = require('../controllers/usersControll');
router.get('/', users_controller.loadPage);

module.exports = router;
