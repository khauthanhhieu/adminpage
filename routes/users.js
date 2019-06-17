var express = require('express');
var router = express.Router();

var users_controller = require('../controllers/usersControll');
router.get('/', users_controller.loadPage);
router.get('/create',users_controller.getCreate);
router.post('/create', users_controller.create);
router.get('/lock/:id', users_controller.lock);
router.get('/unlock/:id', users_controller.unlock);
router.get('/check', users_controller.check);
router.get('/edit/:id', users_controller.getEdit);
router.post('/edit/:id', users_controller.postEdit);
router.get('/detail/:id', users_controller.detail);
module.exports = router;
