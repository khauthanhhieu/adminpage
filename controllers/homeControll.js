var home = require('express');

exports.loadPage = function (req, res) {
	if (req.user){
		res.render('index', { user: req.user })
	}
	else
		res.redirect('/login');
}