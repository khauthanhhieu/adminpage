var products = require('express');
var conn = require('./connection');

exports.loadPage = function(req, res) {
	var p = req.query.p;
	if (p == null)
		p = 1;
	var sql = "SELECT * FROM products WHERE isdelete=0 LIMIT 10 OFFSET " + (p - 1)*10;
	conn.query(sql, function (err, products, fields){
		if (err) throw err;
		var sql1 = "SELECT count(*) as value FROM products WHERE isdelete=0";
		conn.query(sql1, function(err, count, fields) {
			res.render('products', {title : 'Express', uList: products, nPage : (count[0].value - 1)/10 + 1, iPage : p, user: req.user});
		});
	});
};

exports.getAdd = function(req, res) {
	var sql = "SELECT * FROM categories WHERE isdelete=0";
	conn.query(sql, function (err, categories, fields){
		if (err) throw err;
		res.render('addProduct', {title : 'Express', cList: categories, user: req.user });
	});
};

function date2str(x, y) {
    var z = {
        M: x.getMonth() + 1,
        d: x.getDate(),
        h: x.getHours(),
        m: x.getMinutes(),
        s: x.getSeconds()
    };
    y = y.replace(/(M+|d+|h+|m+|s+)/g, function(v) {
        return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2)
    });

    return y.replace(/(y+)/g, function(v) {
        return x.getFullYear().toString().slice(-v.length)
    });
}

exports.add = function(req, res, next) {
	var date = date2str(new Date(), 'yyyy/MM/dd');
	var data = [req.body.txtCid, req.body.txtProductName, req.body.numberCost, req.body.numberPrice, req.body.txtLinkImage, req.body.txtCountry, req.body.txtProductor, date, req.body.numberQuantity, req.body.txtDescs, 0];

	var sql = 'INSERT INTO products (cid, name, cost, price, path_picture, orgin, productor, date, quantity, descr, isdelete) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
	conn.query(sql, data, (err, results, fields ) =>{
		if(err) {
			return console.err(err.message);
		}
	});
	res.redirect('/products');
}

exports.getEdit = function(req, res) {
	var sql1 = `SELECT * FROM categories WHERE isdelete=0`;
    conn.query(sql1, function(err, categories, fields){
        if (err) throw err;
		
		var sql = 'SELECT * FROM products WHERE id=?'
		var id = req.params.id
		conn.query(sql, id, function(err, product, fields){
			if (err) throw err;
			res.render('editProduct', {title : 'Express', cList : categories, pItem : product[0], user: req.user});
		});
    });
}

exports.edit = function(req, res, next) {
	var date = date2str(new Date(), 'yyyy/MM/dd');
	var sql = 'UPDATE products set cid=?, name=?, cost=?, price=?, path_picture=?, orgin=?, productor=?, date=?, quantity=?, descr=?, isdelete=? WHERE id=?';
	var data = [req.body.txtCid, req.body.txtProductName, req.body.numberCost, req.body.numberPrice, req.body.txtLinkImage, req.body.txtCountry, req.body.txtProductor, date, req.body.numberQuantity, req.body.txtDescs, 0, req.params.id];
	conn.query(sql, data, (err, results, fields)=>{
		if(err) {
			return console.err(err.message)
		}
	});
	res.redirect('/products');
}

exports.delete = function(req, res, next) {
	var sql = 'UPDATE products set isdelete=1 WHERE id=?';
	var data = [req.params.id];
	conn.query(sql, data, (err, results, fields)=>{
		if(err) {
			return console.err(err.message)
		}
	});
	res.redirect('/products');
}