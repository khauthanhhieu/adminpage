var htgianhang = require('../models/htgianhang');

// Display list of all htgianhangs.

exports.htgianhang_list = function(req, res) {
    res.render('heThongGianHangadmin', { title: 'Express' });
};

// Display detail page for a specific htgianhang.
exports.htgianhang_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: htgianhang detail: ' + req.params.id);
};

// Display htgianhang create form on GET.
exports.htgianhang_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: htgianhang create GET');
};

// Handle htgianhang create on POST.
exports.htgianhang_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: htgianhang create POST');
};

// Display htgianhang delete form on GET.
exports.htgianhang_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: htgianhang delete GET');
};

// Handle htgianhang delete on POST.
exports.htgianhang_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: htgianhang delete POST');
};

// Display htgianhang update form on GET.
exports.htgianhang_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: htgianhang update GET');
};

// Handle htgianhang update on POST.
exports.htgianhang_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: htgianhang update POST');
};