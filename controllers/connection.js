var mysql = require('mysql');

// var conn = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'shopdb',
// });

var conn = mysql.createConnection({
	host: 'sql12.freemysqlhosting.net',
	user: 'sql12295812',
	password: 'qZBKmsI7k1',
	port : 3306,
	database: 'sql12295812',
});

conn.connect(function (err) {
	if (err)
		throw err.stack;
	console.log('ket noi thanh cong');
});

module.exports = conn;