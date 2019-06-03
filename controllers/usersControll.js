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
exports.getCreate = function(req, res) {
    res.render('createUser', { title: 'Express'});
}
exports.create = function (req, res, next) {
    var sql = `INSERT INTO users(username, password, fullname, email, tel, birthday, address ) VALUES (?,?,?,?,?,?,?)`;
    var data = [req.body.txtUsername, req.body.txtPass,req.body.txtFullName,req.body.txtEmail,req.body.txtPhone,req.body.txtDate,req.body.txtAddress];
    conn.query(sql, data, (err, results, fields) => {
        if (err) {
            return console.error(err.message);
        }
    });
    res.redirect('./');
}

exports.delete = function (req, res, next) {
    //var sql = `DELETE FROM categories WHERE id=?`;
    var sql = `UPDATE users SET isdelete=1 WHERE id=?`;
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