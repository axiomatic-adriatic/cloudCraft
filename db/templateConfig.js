var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'cloud_craft'
});

connection.connect();

module.exports = connection;