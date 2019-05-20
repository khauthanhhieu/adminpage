var catogories = require('express');

exports.loadPage = function(req, res) {
	res.render('catogories', {title: 'Express' });
}