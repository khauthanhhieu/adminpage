var users = require('express');

var conn = require('./connection');

exports.loadPage = function (req, res, next) {
    var sql = "SELECT `fullname`, `email`, `total`, `date`, `stt` FROM users, orders WHERE users.id = orders.user_id";
    conn.query(sql, function (err, order, fields) {
        if (err) throw err;
        res.render('orders', { title: 'Express', oList: order });
        //res.end();
    });
}