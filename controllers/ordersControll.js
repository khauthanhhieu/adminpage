var users = require('express');

var conn = require('./connection');

exports.loadPage = function (req, res, next) {
    var sql = `SELECT fullname, email, total, DATE_FORMAT(date, "%d/%m/%Y") as odate, stt FROM users, orders WHERE users.id = orders.user_id`;
    conn.query(sql, function (err, order, fields) {
        if (err) throw err;
        res.render('orders', { title: 'Express', oList: order });
        //res.end();
    });
}