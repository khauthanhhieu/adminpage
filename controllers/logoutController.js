var logout = require('express');


exports.loadPage = function (req, res) {
     req.logout();
    res.redirect('/');
}
