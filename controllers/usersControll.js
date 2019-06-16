var users = require('express');
var md5=require('md5');
var conn = require('./connection');
const Admin = require('../models/users');
exports.loadPage = function (req, res, next) {
    var p = req.query.p;
	if (p == null)
        p = 1;
    
    var sql = "SELECT * FROM users LIMIT 10 OFFSET " + (p - 1)*10;
    conn.query(sql, function (err, users, fields) {
        if (err) throw err;
        var sql1 = "SELECT count(*) as value FROM users";
        conn.query(sql1, function (err, count, fields) {
            if (err) throw err;
            res.render('user-acc', { title: 'Express', uList: users, nPage : (count[0].value - 1)/10 + 1 , iPage : p });
        });
    });
}
exports.check = async (req, res, next) => {
    const userExist = await Admin.check(req.query.email);
    res.json(userExist);
  };

exports.getCreate = function(req, res) {
    res.render('createUser', { title: 'Express'});
}
exports.create = function (req, res, next) {
    var sql = `INSERT INTO users(username, password, fullname, email, tel, birthday, address ) VALUES (?,?,?,?,?,?,?)`;
   var password = md5(req.body.txtPass);
    var data = [req.body.txtUsername, password,req.body.txtFullName,req.body.txtEmail,req.body.txtPhone,req.body.txtDate,req.body.txtAddress];
    conn.query(sql, data, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
    });
    res.redirect('./');
}

exports.lock = function (req, res, next) {
    var sql = `UPDATE users SET isdelete=1 WHERE id=?`;
    var data = [req.params.id];
    conn.query(sql, data, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
    });
    res.redirect('../');
}

exports.unlock = function (req, res, next) {
    var sql = `UPDATE users SET isdelete=0 WHERE id=?`;
    var data = [req.params.id];
    conn.query(sql, data, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
    });
    res.redirect('../');
}

exports.getEdit = function(req, res) {
    var id = req.params.id;
    var sql = `SELECT *, DATE_FORMAT(birthday, "%Y-%m-%d") as birth FROM users WHERE id=?`;
    conn.query(sql, id, function (err, users, fields) {
        if (err) throw err;
        res.render('editUser', { title: 'Express', uItem: users[0] });
        console.log(users[0])
        //res.end();
    });
}

exports.postEdit = function(req, res) {
    var sql = `UPDATE users SET username=?, password=?, fullname=?, tel=?, email=?, birthday=?, address=?  WHERE id=?`;

    console.log('log here: ', req.body.txtUsername)
    var data = [req.body.txtUsername, req.body.txtPass,req.body.txtFullName,req.body.txtPhone,req.body.txtEmail,req.body.txtDate,req.body.txtAddress,req.params.id];

    console.log(req.body.txtFullName);
    console.log(req.params.id);

    conn.query(sql, data, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
    });
    res.redirect('../');
}