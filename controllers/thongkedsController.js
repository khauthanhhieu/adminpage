var thongkeds = require('../models/thongkeds');

// Display list of all thongkedss.
exports.thongkeds_list = function(req, res) {
    res.render('thongkedoanhso', { title: 'Express' });
};

// Display detail page for a specific thongkeds.
exports.thongkeds_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: thongkeds detail: ' + req.params.id);
};

// Display thongkeds create form on GET.
exports.thongkeds_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: thongkeds create GET');
};

// Handle thongkeds create on POST.
exports.thongkeds_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: thongkeds create POST');
};

// Display thongkeds delete form on GET.
exports.thongkeds_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: thongkeds delete GET');
};

// Handle thongkeds delete on POST.
exports.thongkeds_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: thongkeds delete POST');
};

// Display thongkeds update form on GET.
exports.thongkeds_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: thongkeds update GET');
};

// Handle thongkeds update on POST.
exports.thongkeds_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: thongkeds update POST');
};