var products = require('express');

exports.loadPage = function(req, res) {
	res.render('products', {title: 'Express' });
}