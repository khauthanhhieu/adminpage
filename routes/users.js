var express = require('express');
var router = express.Router();

var users_controller = require('../controllers/usersControll');
router.get('/', users_controller.loadPage);
router.get('/create',users_controller.getCreate);
router.post('/create', users_controller.create);
router.get('/delete/:id', users_controller.delete);

router.get('/edit/:id', users_controller.getEdit);
router.post('/edit/:id', users_controller.postEdit);
module.exports = router;