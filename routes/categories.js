var express = require('express');
var router = express.Router();

var catogories_controller = require('../controllers/categoriesControll');
router.get('/', catogories_controller.loadPage);

router.post('/create', catogories_controller.create);
router.get('/delete/:id', catogories_controller.delete);

router.get('/edit/:id', catogories_controller.getEdit);
router.post('/edit/:id', catogories_controller.postEdit);

module.exports = router;