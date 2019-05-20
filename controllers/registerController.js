//var register = require('../models/register');

// Display list of all registers.
exports.register_list = function(req, res) {
    res.render('registeradmin', { title: 'Express' });
};

// Display detail page for a specific register.
exports.register_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: register detail: ' + req.params.id);
};

// Display register create form on GET.
exports.register_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: register create GET');
};

// Handle register create on POST.
exports.register_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: register create POST');
};

// Display register delete form on GET.
exports.register_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: register delete GET');
};

// Handle register delete on POST.
exports.register_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: register delete POST');
};

// Display register update form on GET.
exports.register_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: register update GET');
};

// Handle register update on POST.
exports.register_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: register update POST');
};