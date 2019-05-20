var thongkesl = require('../models/thongkesl');

// Display list of all thongkesls.
exports.thongkesl_list = function(req, res) {
    res.render('thongketheosoluong', { title: 'Express' });
};

// Display detail page for a specific thongkesl.
exports.thongkesl_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: thongkesl detail: ' + req.params.id);
};

// Display thongkesl create form on GET.
exports.thongkesl_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: thongkesl create GET');
};

// Handle thongkesl create on POST.
exports.thongkesl_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: thongkesl create POST');
};

// Display thongkesl delete form on GET.
exports.thongkesl_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: thongkesl delete GET');
};

// Handle thongkesl delete on POST.
exports.thongkesl_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: thongkesl delete POST');
};

// Display thongkesl update form on GET.
exports.thongkesl_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: thongkesl update GET');
};

// Handle thongkesl update on POST.
exports.thongkesl_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: thongkesl update POST');
};