var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog');
});

/*router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/doashboard', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/taiKhoanadmin', function(req, res, next) {
  res.render('taiKhoanadmin', { title: 'Express' });
});

router.get('/thongTinKhachHangadmin', function(req, res, next) {
  res.render('thongTinKhachHangadmin', { title: 'Express' });
});

router.get('/heThongGianHangadmin', function(req, res, next) {
  res.render('heThongGianHangadmin', { title: 'Express' });
});
router.get('/sanpham', function(req, res, next) {
  res.render('sanpham', { title: 'Express' });
});
router.get('/thongkedoanhso', function(req, res, next) {
  res.render('thongkedoanhso', { title: 'Express' });
});
router.get('/thongketheosoluong', function(req, res, next) {
  res.render('thongketheosoluong', { title: 'Express' });
});
router.get('/dondathang', function(req, res, next) {
  res.render('dondathang', { title: 'Express' });
});


router.get('/loginadmin', function(req, res, next) {
  res.render('loginadmin', { title: 'Express' });
});
router.get('/registeradmin', function(req, res, next) {
  res.render('registeradmin', { title: 'Express' });
});
router.get('/forget-passadmin', function(req, res, next) {
  res.render('forget-passadmin', { title: 'Express' });
});*/
module.exports = router;
