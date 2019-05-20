var orders = require('express');

exports.loadPage = function(req, res) {
	res.render('orders', {title: 'Express' });
}