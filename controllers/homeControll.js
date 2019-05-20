var home = require('express');

exports.loadPage = function(req, res) {
	res.render('index', {title: 'Express' });
}