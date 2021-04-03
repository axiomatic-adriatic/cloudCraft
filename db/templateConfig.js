var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'cloudCraft'
});

connection.connect();

module.exports = connection;