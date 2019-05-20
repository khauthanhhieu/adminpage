var users = require('express');

exports.loadPage = function(req, res) {
	res.render('user-acc', {title: 'Express' });
}