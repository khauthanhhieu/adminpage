var home = require('express');


exports.loadPage = function (req, res) {
    res.render('login', { title: 'Express' });
}
