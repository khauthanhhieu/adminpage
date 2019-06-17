var catogories = require('express');
var category = require('../models/category').Category;

var conn = require('./connection');

exports.loadPage = function (req, res, next) {
    var sql = "SELECT * FROM categories WHERE isdelete=0";
    conn.query(sql, function (err, categories, fields) {
        if (err) throw err;
        res.render('catogories', { title: 'Express', cList: categories, user: req.user });
        //res.end();
    });
}

exports.create = function (req, res, next) {
	var sql = `INSERT INTO categories(name) VALUES (?)`;
	var data = [req.body.name];
	conn.query(sql, data, (err, results, fields) => {
		if (err) {
		  return console.error(err.message);
		}
	});
	res.redirect('./');
}

exports.delete = function (req, res, next) {
	//var sql = `DELETE FROM categories WHERE id=?`;
	var sql = `UPDATE categories SET isdelete=1 WHERE id=?`;
	var data = [req.params.id];
	conn.query(sql, data, (err, results, fields) => {
		if (err) {
		  return console.error(err.message);
		}
	});
	res.redirect('../');
}

exports.getEdit = function(req, res) {
	var id = req.params.id;
	var sql = `SELECT * FROM categories WHERE id=?`;
	conn.query(sql, id, function (err, categories, fields) {
        if (err) throw err;
        res.render('editCategory', { title: 'Express', cItem: categories[0], user: req.user });
        //res.end();
    });
}

exports.postEdit = function(req, res) {
	var sql = `UPDATE categories SET name=? WHERE id=?`;
	var data = [req.body.txtName, req.params.id];
	conn.query(sql, data, (err, results, fields) => {
		if (err) {
			return console.error(err.message);
		}
	});
	res.redirect('../');
}