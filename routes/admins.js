var express = require('express');
var router = express.Router();

var admins_controller = require('../controllers/adminsControll');
router.get('/', admins_controller.loadPage);

router.get('/create', admins_controller.getCreate);
router.post('/create', admins_controller.postCreate);

router.get('/delete/:id', admins_controller.delete);

module.exports = router;