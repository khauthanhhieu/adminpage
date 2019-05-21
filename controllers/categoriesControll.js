var catogories = require('express');

var conn = require('./connection');

exports.loadPage = function (req, res, next) {
    var sql = "SELECT * FROM categories WHERE isdelete=0";
    conn.query(sql, function (err, categories, fields) {
        if (err) throw err;
        res.render('catogories', { title: 'Express', cList: categories });
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
	var sql = `UPDATE categories SET isdetele=1 WHERE id=?`;
	var data = [req.params.id];
	console.log(data);
	conn.query(sql, data, (err, results, fields) => {
		if (err) {
		  return console.error(err.message);
		}
	});
	res.redirect('../');
}

exports.getEdit = function(req, res) {
	var id = req.params.id;
	res.render('editCategory', {title: 'Express' , id : id});
}

exports.postEdit = function(req, res) {

}