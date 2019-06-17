var express = require('express');
var router = express.Router();

var admins_controller = require('../controllers/adminsControll');
router.get('/', admins_controller.loadPage);

router.get('/create', admins_controller.getCreate);
router.post('/create', admins_controller.postCreate);

router.get('/lock/:id', admins_controller.lock);
router.get('/unlock/:id', admins_controller.unlock);

router.get('/detail/:id', admins_controller.details);
router.get('/detail', admins_controller.detail);

module.exports = router;