var login = require('../models/login');

// Display list of all logins.
exports.login_list = function(req, res) {
    res.render('loginadmin', { title: 'Express' });
};

// Display detail page for a specific login.
exports.login_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: login detail: ' + req.params.id);
};

// Display login create form on GET.
exports.login_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: login create GET');
};

// Handle login create on POST.
exports.login_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: login create POST');
};

// Display login delete form on GET.
exports.login_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: login delete GET');
};

// Handle login delete on POST.
exports.login_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: login delete POST');
};

// Display login update form on GET.
exports.login_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: login update GET');
};

// Handle login update on POST.
exports.login_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: login update POST');
};