var ttinkhachhang = require('../models/ttinkhachhang');

// Display list of all ttinkhachhangs.
exports.ttinkhachhang_list = function(req, res) {
    res.render('thongTinKhachHang', { title: 'Express' });
};

// Display detail page for a specific ttinkhachhang.
exports.ttinkhachhang_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: ttinkhachhang detail: ' + req.params.id);
};

// Display ttinkhachhang create form on GET.
exports.ttinkhachhang_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: ttinkhachhang create GET');
};

// Handle ttinkhachhang create on POST.
exports.ttinkhachhang_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ttinkhachhang create POST');
};

// Display ttinkhachhang delete form on GET.
exports.ttinkhachhang_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: ttinkhachhang delete GET');
};

// Handle ttinkhachhang delete on POST.
exports.ttinkhachhang_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ttinkhachhang delete POST');
};

// Display ttinkhachhang update form on GET.
exports.ttinkhachhang_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: ttinkhachhang update GET');
};

// Handle ttinkhachhang update on POST.
exports.ttinkhachhang_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: ttinkhachhang update POST');
};