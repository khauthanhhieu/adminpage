var forgot_pass = require('express');


exports.loadPage = function (req, res) {
    
    res.render('forget-passadmin', { title:"Quên mật khẩu" });
}
