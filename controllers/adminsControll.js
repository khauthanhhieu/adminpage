var users = require('express');

var conn = require('./connection');
var md5=require('md5');
exports.loadPage = function (req, res, next) {
    if(req.user)
    {
    var sql = "SELECT * FROM admins WHERE isdelete=0";
    conn.query(sql, function (err, admins, fields) {
        if (err) throw err;
        res.render('admin-acc', { user:req.user, aList: admins });
        //res.end();
    });
    }
    else
    {
        res.redirect('/login');
    }
}

exports.getCreate = function (req, res, next) {
    res.render('createAdmin', { user:req.user });
}

function isExists(username) {
    return conn.query(check, d, (err, results, fields) => {
        return results.length;
    })
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
            var password=md5(req.body.txtPass);
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

exports.delete = function (req, res, next) {
    var sql = `UPDATE admins SET isdelete=1 WHERE id=?`;
    var data = [req.params.id];
    conn.query(sql, data, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
    });
    res.redirect('../');
}

exports.details = function (req, res, next) {
    var sql = `SELECT *, DATE_FORMAT(birthday, "%d/%m/%Y") as birth FROM admins WHERE id=?`;
    var data = [req.params.id];
    conn.query(sql, data, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
        console.log(results[0]);
        res.render('detailAdmin', { user:req.user, aItem : results[0] });
    });
}