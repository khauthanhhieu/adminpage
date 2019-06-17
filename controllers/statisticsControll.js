var statistics = require('express');

exports.loadPageSales = function(req, res) {
	if(req.user)
	res.render('sales-statistics', {user:req.user});
	else
	res.redirect('/login')
}

exports.loadPageQuantity = function(req, res) {
	res.render('quantity-statistics', {user:req.user });
}