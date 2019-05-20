var taikhoan = require('../models/taikhoan');

// Display list of all taikhoans.
exports.taikhoan_list = function(req, res) {
    res.render('taikhoanadmin', { title: 'Express' });
};

// Display detail page for a specific taikhoan.
exports.taikhoan_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: taikhoan detail: ' + req.params.id);
};

// Display taikhoan create form on GET.
exports.taikhoan_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: taikhoan create GET');
};

// Handle taikhoan create on POST.
exports.taikhoan_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: taikhoan create POST');
};

// Display taikhoan delete form on GET.
exports.taikhoan_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: taikhoan delete GET');
};

// Handle taikhoan delete on POST.
exports.taikhoan_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: taikhoan delete POST');
};

// Display taikhoan update form on GET.
exports.taikhoan_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: taikhoan update GET');
};

// Handle taikhoan update on POST.
exports.taikhoan_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: taikhoan update POST');
};