var statistics = require('express');
var conn = require('./connection');

exports.loadPageSales = function (req, res) {
	if(req.user){
	var sqld = `SELECT DATE_FORMAT(date, "%d/%m/%Y") as date, SUM(total) as total FROM orders 
				GROUP BY date 
				ORDER BY orders.date`;
	conn.query(sqld, function (err, results, fields) {
		if (err) throw err;
		var ndList = [];
		var vdList = [];
		results.forEach(element => {
			ndList.push(element.date);
			vdList.push(element.total);
		});
		var sqlw = `SELECT WEEK(date) as week, YEAR(date) as year, SUM(total) as total FROM orders 
					GROUP BY week, year 
					ORDER BY orders.date`;
		conn.query(sqlw, function (err, results, fields) {
			if (err) throw err;
			var nwList = [];
			var vwList = [];
			results.forEach(element => {
				nwList.push(element.week + "/" + element.year);
				vwList.push(element.total);
			});
			var sqlm = `SELECT DATE_FORMAT(date, "%m/%Y") as month, SUM(total) as total 
						FROM orders 
						GROUP BY month 
						ORDER BY orders.date`;
			conn.query(sqlm, function (err, results, fields) {
				if (err) throw err;
				var nmList = [];
				var vmList = [];
				results.forEach(element => {
					nmList.push(element.month);
					vmList.push(element.total);
				});
				var sqlq = `SELECT QUARTER(date) as quarter, YEAR(date) as year, SUM(total) as total FROM orders 
							GROUP BY quarter, year 
							ORDER BY orders.date`;
				conn.query(sqlq, function (err, results, fields) {
					if (err) throw err;
					var nqList = [];
					var vqList = [];
					results.forEach(element => {
						nqList.push(element.quarter + "/" + element.year);
						vqList.push(element.total);
					});
					var sqly = `SELECT YEAR(date) as year, SUM(total) as total FROM orders 
							GROUP BY year 
							ORDER BY orders.date`;
					conn.query(sqly, function (err, results, fields) {
						if (err) throw err;
						var nyList = [];
						var vyList = [];
						results.forEach(element => {
							nyList.push(element.year);
							vyList.push(element.total);
						});
						res.render('sales-statistics', {
							user: req.user,
							ndList: JSON.stringify(ndList), vdList: JSON.stringify(vdList),
							nwList: JSON.stringify(nwList), vwList: JSON.stringify(vwList),
							nmList: JSON.stringify(nmList), vmList: JSON.stringify(vmList),
							nqList: JSON.stringify(nqList), vqList: JSON.stringify(vqList),
							nyList: JSON.stringify(nyList), vyList: JSON.stringify(vyList)
						});
					});
				});
			});
		});
	});
}else{
	res.redirect('/login');
}
}

exports.loadPageQuantity = function (req, res) {
			var sql = "SELECT name, SUM(number) as value "
				+ "FROM products, orderdetails "
				+ "WHERE products.id = product_id "
				+ "GROUP BY name "
				+ "ORDER BY value DESC "
				+ "LIMIT 10";
			conn.query(sql, function (err, results, fields) {
				if (err) throw err;
				var nList = [];
				var vList = [];
				results.forEach(element => {
					nList.push(element.name);
					vList.push(element.value);
				});
				res.render('quantity-statistics', { user: req.user, nList: JSON.stringify(nList), vList: JSON.stringify(vList) });
			});
		}