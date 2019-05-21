var catogories = require('express');

var conn = require('./connection');

exports.loadPage = function(req, res) {
	res.render('catogories', {title: 'Express' });
}

exports.loadPage = function (req, res, next) {
    var sql = "SELECT * FROM categories";
    conn.query(sql, function (err, categories, fields) {
        if (err) throw err;
        res.render('index', { title: 'Express', cList: categories });
        //res.end();
    });
}