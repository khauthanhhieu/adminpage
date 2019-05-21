var users = require('express');

var conn = require('./connection');

exports.loadPage = function (req, res, next) {
    var sql = "SELECT * FROM users WHERE isdelete=0";
    conn.query(sql, function (err, users, fields) {
        if (err) throw err;
        res.render('user-acc', { title: 'Express', uList: users });
        //res.end();
    });
}