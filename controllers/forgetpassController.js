var forgetpass = require('../models/forgetpass');

// Display list of all forgetpasss.

exports.index = function(req, res) {
    res.render('forget-passadmin', { title: 'Express' });
};

exports.forgetpass_list = function(req, res) {
    res.render('forget-passadmin', { title: 'Express' });
};

// Display detail page for a specific forgetpass.
exports.forgetpass_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: forgetpass detail: ' + req.params.id);
};

// Display forgetpass create form on GET.
exports.forgetpass_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: forgetpass create GET');
};

// Handle forgetpass create on POST.
exports.forgetpass_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: forgetpass create POST');
};

// Display forgetpass delete form on GET.
exports.forgetpass_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: forgetpass delete GET');
};

// Handle forgetpass delete on POST.
exports.forgetpass_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: forgetpass delete POST');
};

// Display forgetpass update form on GET.
exports.forgetpass_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: forgetpass update GET');
};

// Handle forgetpass update on POST.
exports.forgetpass_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: forgetpass update POST');
};