var sanpham = require('../models/sanpham');

// Display list of all sanphams.
exports.sanpham_list = function(req, res) {
    res.render('sanpham', { title: 'Express' });
};

// Display detail page for a specific sanpham.
exports.sanpham_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: sanpham detail: ' + req.params.id);
};

// Display sanpham create form on GET.
exports.sanpham_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: sanpham create GET');
};

// Handle sanpham create on POST.
exports.sanpham_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: sanpham create POST');
};

// Display sanpham delete form on GET.
exports.sanpham_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: sanpham delete GET');
};

// Handle sanpham delete on POST.
exports.sanpham_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: sanpham delete POST');
};

// Display sanpham update form on GET.
exports.sanpham_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: sanpham update GET');
};

// Handle sanpham update on POST.
exports.sanpham_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: sanpham update POST');
};