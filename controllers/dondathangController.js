//var dondathang = require('../models/dondathang');

// Display list of all dondathangs.
exports.dondathang_list = function(req, res) {
    res.render('dondathangadmin', { title: 'Express' });
};

// Display detail page for a specific dondathang.
exports.dondathang_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: dondathang detail: ' + req.params.id);
};

// Display dondathang create form on GET.
exports.dondathang_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: dondathang create GET');
};

// Handle dondathang create on POST.
exports.dondathang_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: dondathang create POST');
};

// Display dondathang delete form on GET.
exports.dondathang_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: dondathang delete GET');
};

// Handle dondathang delete on POST.
exports.dondathang_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: dondathang delete POST');
};

// Display dondathang update form on GET.
exports.dondathang_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: dondathang update GET');
};

// Handle dondathang update on POST.
exports.dondathang_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: dondathang update POST');
};