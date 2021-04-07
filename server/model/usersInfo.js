const db = require('../../db/db.js');

exports.getUserID = (email, callback) => {
  db.query('SELECT * FROM users WHERE (email) = (?)', [email], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      console.log(result)
      callback(null, result[0]);
    }
  });
};
