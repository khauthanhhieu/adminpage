var users = require('express');
var conn = require('./connection');
var md5 = require('md5');

exports.loadPage = function (req, res, next) {
    var p = req.query.p;
	if (p == null)
        p = 1;
    var sql = "SELECT * FROM admins LIMIT 10 OFFSET " + (p - 1)*10;
    conn.query(sql, function (err, admins, fields) {
        if (err) throw err;
        var sql1 = "SELECT count(*) as value FROM admins";
        conn.query(sql1, function (err, count, fields) {
            if (err) throw err;
            res.render('admin-acc', { title: 'Express', aList: admins, user: req.user, nPage : (count[0].value - 1)/10 + 1 , iPage : p });
        });
    });
}

exports.getCreate = function (req, res, next) {
    res.render('createAdmin', { title: 'Express', user: req.user });
}

exports.postCreate = function (req, res, next) {
    var check = `SELECT * FROM admins WHERE isdelete=0 and (username=?)`;
    var d = [req.body.username];
    conn.query(check, d, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
        console.log(results);
        if (results.length == 0) {
            var sql = `INSERT INTO admins(fullname, username, password, email, tel, birthday, address) VALUES (?, ?, ?, ?, ?, ?, ?)`;
            var password = md5(req.body.txtPass);
            var data = [req.body.fullname, req.body.username, password, req.body.email, req.body.tel, req.body.birth, req.body.addr];
            conn.query(sql, data, (err, results, fields) => {
                if (err) {
                    return console.error(err.message);
                }
                console.log('insert xong');
                res.redirect('/admins');
            });
        }
    })
}

exports.lock = function (req, res, next) {
    var sql = `UPDATE admins SET isdelete=1 WHERE id=?`;
    var data = [req.params.id];
    conn.query(sql, data, (err, results, fields) => {
        if (err) throw err;
    });
    res.redirect('/admins');
}

exports.unlock = function (req, res, next) {
    if (req.params.id != req.user.id) {
        var sql = `UPDATE admins SET isdelete=0 WHERE id=?`;
        var data = [req.params.id];
        conn.query(sql, data, (err, results, fields) => {
            if (err) throw err;        
        });
    }
    res.redirect('/admins');
}

exports.details = function (req, res, next) {
    var sql = `SELECT *, DATE_FORMAT(birthday, "%d/%m/%Y") as birth FROM admins WHERE id=?`;
    var data = [req.params.id];
    conn.query(sql, data, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
        console.log(results[0]);
        res.render('detailAdmin', { title: 'Express', aItem : results[0], user: req.user });
    });
}

exports.detail = function (req, res, next) {
    res.redirect('/admins/detail/' + req.user.id);
}