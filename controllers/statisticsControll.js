var statistics = require('express');
var conn = require('./connection');

exports.loadPageSales = function(req, res) {
	res.render('sales-statistics', { user: req.user });
}

exports.loadPageQuantity = function(req, res) {
	var sql = "SELECT name, SUM(number) as value "
	 		+ "FROM products, orderdetails "
			+ "WHERE products.id = product_id "
			+ "GROUP BY name "
			+ "ORDER BY value DESC "
			+ "LIMIT 10";
	conn.query(sql, function (err, results, fields){
		if (err) throw err;
		var nList = [];
		var vList = [];
		console.log(results.array);
		results.forEach(element => {
			nList.push(element.name);
			vList.push(element.value);
		});
		res.render('quantity-statistics', { user: req.user , nList : JSON.stringify(nList), vList : JSON.stringify(vList) });
	});
}