var express = require('express');
var router = express.Router();

var products_controller = require('../controllers/productsControll');
router.get('/', products_controller.loadPage);
router.post('/', products_controller.edit)

router.get('/add', products_controller.getAdd);
router.post('/add', products_controller.add);

router.get('/edit/:id', products_controller.getEdit);
router.post('/edit/:id', products_controller.edit);

router.get('/delete/:id', products_controller.delete);

module.exports = router;
