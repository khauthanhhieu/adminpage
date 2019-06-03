var products = require('express');

var conn = require('./connection');
exports.loadPage = function(req, res) {

	var sql = "SELECT * FROM products WHERE isdelete=0";
	conn.query(sql, function (err, products, fields){
		if (err) throw err;
		res.render('products', {title : 'Express', uList: products });
	});
};

exports.getAdd = function(req, res) {
	var sql = "SELECT * FROM categories WHERE isdelete=0";
	conn.query(sql, function (err, categories, fields){
		if (err) throw err;
		res.render('addProduct', {title : 'Express', cList: categories });
	});
};

exports.add = function(req, res, next) {
	let day = new Date()
	day.getFullYear();
	var data = [req.body.txtCid, req.body.txtProductName, req.body.numberCost, req.body.numberPrice, req.body.txtLinkImage, req.body.txtCountry, req.body.txtProductor, day.getFullYear(), req.body.numberQuantity, req.body.txtDescs, 0];

	var sql = 'INSERT INTO products (cid, name, cost, price, path_picture, orgin, productor, date, quantity, descr, isdelete) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
	conn.query(sql, data, (err, results, fields ) =>{
		if(err) {
			return console.err(err.message);
		}
	});
	res.redirect('./');
}

exports.getEdit = function(req, res) {
	var sql1 = `SELECT * FROM categories WHERE isdelete=0`;
    conn.query(sql1, function(err, categories, fields){
        if (err) throw err;
		
		var sql = 'SELECT * FROM products WHERE id=?'
		var id = req.params.id
		conn.query(sql, id, function(err, product, fields){
			if (err) throw err;
			res.render('editProduct', {title : 'Express', cList : categories, pItem : product[0]});
		});
    });
}

exports.edit = function(req, res, next) {
	let day = new Date()
	day.getFullYear();
	var sql = 'UPDATE products set cid=?, name=?, cost=?, price=?, path_picture=?, orgin=?, productor=?, date=?, quantity=?, descr=?, isdelete=? WHERE id=?';
	console.log(req.body.txtCid, req.body.txtProductName, req.body.numberCost, req.body.numberPrice, req.body.txtLinkImage, req.body.txtCountry, req.body.txtProductor, day.getFullYear(), req.body.numberQuantity, req.body.txtDescs, 0, req.params.id)
	var data = [req.body.txtCid, req.body.txtProductName, req.body.numberCost, req.body.numberPrice, req.body.txtLinkImage, req.body.txtCountry, req.body.txtProductor, day.getFullYear(), req.body.numberQuantity, req.body.txtDescs, 0, req.params.id];
	conn.query(sql, data, (err, results, fields)=>{
		if(err) {
			return console.err(err.message)
		}
	});
	res.redirect('../');
}

exports.getDelete = function(req, res) {
	var id = req.params.id
	var sql = 'SELECT * FROM products WHERE id=?'
	console.log('id ne: ', id)

	conn.query(sql, id, function(err, product, fields){
		if (err) throw err;
		res.render('deleteProduct', {title : 'Express', cItem : product[0]});
	});
}

exports.delete = function(req, res, next) {
	let day = new Date()
	day.getFullYear();
	var sql = 'UPDATE products set isdelete=? WHERE id=?';
	console.log(req.body.txtCid, req.body.txtProductName, req.body.numberCost, req.body.numberPrice, req.body.txtLinkImage, req.body.txtCountry, req.body.txtProductor, day.getFullYear(), req.body.numberQuantity, req.body.txtDescs, 0, req.params.id)
	var data = [1, req.params.id];
	conn.query(sql, data, (err, results, fields)=>{
		if(err) {
			return console.err(err.message)
		}
	});
	res.redirect('../');
}