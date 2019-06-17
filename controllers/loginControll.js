var home = require('express');


exports.loadPage = function (req, res) {
    var error = "";
    if (req.query.error == "")
        error = "Username hoặc Password không đúng, vui lòng kiểm tra lại !";
    res.render('login', { user:req.user, error : error });
}