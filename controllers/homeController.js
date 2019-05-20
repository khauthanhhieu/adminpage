var Home = require('../models/home');

// Display list of all homes.

exports.index = function(req, res) {
    res.render('index', { title: 'Express' });
};

exports.home_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Home list');
};

// Display detail page for a specific home.
exports.home_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Home detail: ' + req.params.id);
};

// Display home create form on GET.
exports.home_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Home create GET');
};

// Handle home create on POST.
exports.home_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Home create POST');
};

// Display home delete form on GET.
exports.home_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Home delete GET');
};

// Handle home delete on POST.
exports.home_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Home delete POST');
};

// Display home update form on GET.
exports.home_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Home update GET');
};

// Handle home update on POST.
exports.home_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Home update POST');
};