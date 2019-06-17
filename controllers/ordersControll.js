var users = require('express');

var conn = require('./connection');

exports.loadPage = function (req, res, next) {
    if (req.user) {
        var sql =  `SELECT orders.id as id, fullname, email, total, DATE_FORMAT(date, "%d/%m/%Y") as odate, orders.stt as idstt, status.status as stt
                    FROM users, orders, status
                    WHERE users.id = orders.user_id && status.idstt = orders.stt`;
        conn.query(sql, function (err, order, fields) {
            if (err) throw err;
            res.render('orders', { user: req.user, oList: order });
        });
    } else {
        res.redirect('/login');
    }
}

exports.confirm = function (req, res, next) {
    var sql = `UPDATE orders SET stt = 2 WHERE id = ?`;
    conn.query(sql, req.params.id, function (err, order, fields) {
        if (err) throw err;
        sql = `SELECT * FROM orderdetails WHERE order_id = ?`;
        conn.query(sql, req.params.id, function (err, orderdetails, fields) {
            if (err) throw err;
            console.log(orderdetails);
            orderdetails.forEach(element => {
                sql = `SELECT quantity as n FROM products WHERE id = ?`;
                conn.query(sql, element.product_id, function (err, number, fields){
                    sql = `UPDATE products SET quantity = ? WHERE id = ?`;
                    conn.query(sql, [number[0].n - element.number, element.product_id], function (err, results, fields){
                        if (err) throw err;
                    });
                });
            });
        }); 
        res.redirect('/orders');
    });
}

exports.confirmDelivery = function (req, res, next) {
    var sql = `UPDATE orders SET stt = 3 WHERE id = ?`;
    conn.query(sql, req.params.id, function (err, orders, fields) {
        if (err) throw err;
        res.redirect('/orders');
    });
}

exports.detail = function (req, res, next) {
    var sql = `SELECT id, total FROM orders WHERE id = ?`
    conn.query(sql, req.params.id, function (err, orders, fields) {
        if (err) throw err;
        var sql1 =  `SELECT products.name as name, number, products.price as price
                    FROM orderdetails, products
                    WHERE orderdetails.product_id = products.id && order_id = ?`;
        conn.query(sql1, req.params.id, function (err, orderdetails, fields) {
            res.render('detailOrder', { user: req.user, oItem: orders[0], odList : orderdetails });
        });
    });
}
