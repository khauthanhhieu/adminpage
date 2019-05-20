var express = require('express');
var router = express.Router();

// Require controller modules.
var htgianhang_controller = require('../controllers/htgianhangController');
var home_controller = require('../controllers/homeController');
var forgetpass_controller = require('../controllers/forgetpassController');
var dondathang_controller = require('../controllers/dondathangController');
var login_controller = require('../controllers/loginController');
var register_controller = require('../controllers/registerController');
var sanpham_controller = require('../controllers/sanphamController');
var taikhoan_controller = require('../controllers/taikhoanController');
var thongkeds_controller = require('../controllers/thongkedsController');
var thongkesl_controller = require('../controllers/thongkeslController');
var ttinkhachhang_controller = require('../controllers/ttinkhachhangController');
/// htgianhang ROUTES ///

// GET catalog home page.
router.get('/', home_controller.index);

// GET request for creating a htgianhang. NOTE This must come before routes that display htgianhang (uses id).
router.get('/htgianhang/create', htgianhang_controller.htgianhang_create_get);

// POST request for creating htgianhang.
router.post('/htgianhang/create', htgianhang_controller.htgianhang_create_post);

// GET request to delete htgianhang.
router.get('/htgianhang/:id/delete', htgianhang_controller.htgianhang_delete_get);

// POST request to delete htgianhang.
router.post('/htgianhang/:id/delete', htgianhang_controller.htgianhang_delete_post);

// GET request to update htgianhang.
router.get('/htgianhang/:id/update', htgianhang_controller.htgianhang_update_get);

// POST request to update htgianhang.
router.post('/htgianhang/:id/update', htgianhang_controller.htgianhang_update_post);

// GET request for one htgianhang.
router.get('/htgianhang/:id', htgianhang_controller.htgianhang_detail);

// GET request for list of all htgianhang items.
router.get('/htgianhangs', htgianhang_controller.htgianhang_list);

/// home ROUTES ///

// GET request for creating home. NOTE This must come before route for id (i.e. display home).
router.get('/home/create', home_controller.home_create_get);

// POST request for creating home.
router.post('/home/create', home_controller.home_create_post);

// GET request to delete home.
router.get('/home/:id/delete', home_controller.home_delete_get);

// POST request to delete home.
router.post('/home/:id/delete', home_controller.home_delete_post);

// GET request to update home.
router.get('/home/:id/update', home_controller.home_update_get);

// POST request to update home.
router.post('/home/:id/update', home_controller.home_update_post);

// GET request for one home.
router.get('/home/:id', home_controller.home_detail);

// GET request for list of all homes.
router.get('/homes', home_controller.home_list);

/// home ROUTES ///

// GET request for creating a home. NOTE This must come before route that displays home (uses id).
router.get('/login/create', login_controller.login_create_get);

//POST request for creating home.
router.post('/login/create', login_controller.login_create_post);

// GET request to delete home.
router.get('/login/:id/delete', login_controller.login_delete_get);

// POST request to delete home.
router.post('/login/:id/delete', login_controller.login_delete_post);

// GET request to update home.
router.get('/login/:id/update', login_controller.login_update_get);

// POST request to update home.
router.post('/login/:id/update', login_controller.login_update_post);

// GET request for one home.
router.get('/login/:id', login_controller.login_detail);

// GET request for list of all home.
router.get('/logins', login_controller.login_list);

/// register ROUTES ///

// GET request for creating a register. NOTE This must come before route that displays register (uses id).
router.get('/register/create', register_controller.register_create_get);

// POST request for creating register. 
router.post('/register/create', register_controller.register_create_post);

// GET request to delete register.
router.get('/register/:id/delete', register_controller.register_delete_get);

// POST request to delete register.
router.post('/register/:id/delete', register_controller.register_delete_post);

// GET request to update register.
router.get('/register/:id/update', register_controller.register_update_get);

// POST request to update register.
router.post('/register/:id/update', register_controller.register_update_post);

// GET request for one register.
router.get('/register/:id', register_controller.register_detail);

// GET request for list of all register.
router.get('/registers', register_controller.register_list);

/// sanpham ROUTES ///

// GET request for creating sanpham. NOTE This must come before route for id (i.e. display sanpham).
router.get('/sanpham/create', sanpham_controller.sanpham_create_get);

// POST request for creating sanpham.
router.post('/sanpham/create', sanpham_controller.sanpham_create_post);

// GET request to delete sanpham.
router.get('/sanpham/:id/delete', sanpham_controller.sanpham_delete_get);

// POST request to delete sanpham.
router.post('/sanpham/:id/delete', sanpham_controller.sanpham_delete_post);

// GET request to update sanpham.
router.get('/sanpham/:id/update', sanpham_controller.sanpham_update_get);

// POST request to update sanpham.
router.post('/sanpham/:id/update', sanpham_controller.sanpham_update_post);

// GET request for one sanpham.
router.get('/sanpham/:id', sanpham_controller.sanpham_detail);

// GET request for list of all sanphams.
router.get('/sanphams', sanpham_controller.sanpham_list);
/// taikhoan ROUTES ///

// GET request for creating taikhoan. NOTE This must come before route for id (i.e. display taikhoan).
router.get('/taikhoan/create', taikhoan_controller.taikhoan_create_get);

// POST request for creating taikhoan.
router.post('/taikhoan/create', taikhoan_controller.taikhoan_create_post);

// GET request to delete taikhoan.
router.get('/taikhoan/:id/delete', taikhoan_controller.taikhoan_delete_get);

// POST request to delete taikhoan.
router.post('/taikhoan/:id/delete', taikhoan_controller.taikhoan_delete_post);

// GET request to update taikhoan.
router.get('/taikhoan/:id/update', taikhoan_controller.taikhoan_update_get);

// POST request to update taikhoan.
router.post('/taikhoan/:id/update', taikhoan_controller.taikhoan_update_post);

// GET request for one taikhoan.
router.get('/taikhoan/:id', taikhoan_controller.taikhoan_detail);

// GET request for list of all taikhoans.
router.get('/taikhoans', taikhoan_controller.taikhoan_list);
/// thongkeds ROUTES ///

// GET request for creating thongkeds. NOTE This must come before route for id (i.e. display thongkeds).
router.get('/thongkeds/create', thongkeds_controller.thongkeds_create_get);

// POST request for creating thongkeds.
router.post('/thongkeds/create', thongkeds_controller.thongkeds_create_post);

// GET request to delete thongkeds.
router.get('/thongkeds/:id/delete', thongkeds_controller.thongkeds_delete_get);

// POST request to delete thongkeds.
router.post('/thongkeds/:id/delete', thongkeds_controller.thongkeds_delete_post);

// GET request to update thongkeds.
router.get('/thongkeds/:id/update', thongkeds_controller.thongkeds_update_get);

// POST request to update thongkeds.
router.post('/thongkeds/:id/update', thongkeds_controller.thongkeds_update_post);

// GET request for one thongkeds.
router.get('/thongkeds/:id', thongkeds_controller.thongkeds_detail);

// GET request for list of all thongkedss.
router.get('/thongkedss', thongkeds_controller.thongkeds_list);
/// thongkesl ROUTES ///

// GET request for creating thongkesl. NOTE This must come before route for id (i.e. display thongkesl).
router.get('/thongkesl/create', thongkesl_controller.thongkesl_create_get);

// POST request for creating thongkesl.
router.post('/thongkesl/create', thongkesl_controller.thongkesl_create_post);

// GET request to delete thongkesl.
router.get('/thongkesl/:id/delete', thongkesl_controller.thongkesl_delete_get);

// POST request to delete thongkesl.
router.post('/thongkesl/:id/delete', thongkesl_controller.thongkesl_delete_post);

// GET request to update thongkesl.
router.get('/thongkesl/:id/update', thongkesl_controller.thongkesl_update_get);

// POST request to update thongkesl.
router.post('/thongkesl/:id/update', thongkesl_controller.thongkesl_update_post);

// GET request for one thongkesl.
router.get('/thongkesl/:id', thongkesl_controller.thongkesl_detail);

// GET request for list of all thongkesls.
router.get('/thongkesls', thongkesl_controller.thongkesl_list);
/// ttinkhachhang ROUTES ///

// GET request for creating ttinkhachhang. NOTE This must come before route for id (i.e. display ttinkhachhang).
router.get('/ttinkhachhang/create', ttinkhachhang_controller.ttinkhachhang_create_get);

// POST request for creating ttinkhachhang.
router.post('/ttinkhachhang/create', ttinkhachhang_controller.ttinkhachhang_create_post);

// GET request to delete ttinkhachhang.
router.get('/ttinkhachhang/:id/delete', ttinkhachhang_controller.ttinkhachhang_delete_get);

// POST request to delete ttinkhachhang.
router.post('/ttinkhachhang/:id/delete', ttinkhachhang_controller.ttinkhachhang_delete_post);

// GET request to update ttinkhachhang.
router.get('/ttinkhachhang/:id/update', ttinkhachhang_controller.ttinkhachhang_update_get);

// POST request to update ttinkhachhang.
router.post('/ttinkhachhang/:id/update', ttinkhachhang_controller.ttinkhachhang_update_post);

// GET request for one ttinkhachhang.
router.get('/ttinkhachhang/:id', ttinkhachhang_controller.ttinkhachhang_detail);

// GET request for list of all ttinkhachhangs.
router.get('/ttinkhachhangs', ttinkhachhang_controller.ttinkhachhang_list);



router.get('/dondathang/create', dondathang_controller.dondathang_create_get);

//POST request for creating home.
router.post('/dondathang/create', dondathang_controller.dondathang_create_post);

// GET request to delete home.
router.get('/dondathang/:id/delete', dondathang_controller.dondathang_delete_get);

// POST request to delete home.
router.post('/dondathang/:id/delete', dondathang_controller.dondathang_delete_post);

// GET request to update home.
router.get('/dondathang/:id/update', dondathang_controller.dondathang_update_get);

// POST request to update home.
router.post('/dondathang/:id/update', dondathang_controller.dondathang_update_post);

// GET request for one home.
router.get('/dondathang/:id', dondathang_controller.dondathang_detail);

// GET request for list of all home.
router.get('/dondathangs', dondathang_controller.dondathang_list);


module.exports = router;