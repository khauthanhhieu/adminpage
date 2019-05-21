var mysql = require('mysql');

// var conn = mysql.createConnection({
// 	host: 'localhost',
// 	user: 'root',
// 	password: '',
// 	database: 'shopdb',
// });

var conn = mysql.createConnection({
	host: 'sql12.freemysqlhosting.net',
	user: 'sql12292485',
	password: 'AQUtKYyH5e',
	port : 3306,
	database: 'sql12292485',
});

conn.connect(function (err) {
	if (err)
		throw err.stack;
	console.log('ket noi thanh cong');
});

module.exports = conn;