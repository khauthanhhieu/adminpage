var express = require('express');
var router = express.Router();

var register_controller = require('../controllers/registerControll');
router.get('/', register_controller.loadPage);
router.get('/create',register_controller.getCreate);
router.post('/create', register_controller.create);
router.get('/delete/:id', register_controller.delete);

router.get('/edit/:id', register_controller.getEdit);
router.post('/edit/:id', register_controller.postEdit);
module.exports = router;
