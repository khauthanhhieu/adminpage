var statistics = require('express');

exports.loadPageSales = function(req, res) {
	res.render('sales-statistics', {title: 'Express' });
}

exports.loadPageQuantity = function(req, res) {
	res.render('quantity-statistics', {title: 'Express' });
}