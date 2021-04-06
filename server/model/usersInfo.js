const db = require('../../db/db.js');

exports.getUserID = (email, callback) => {
  db.query('SELECT user_id FROM users WHERE (email) = (?)', [email], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result[0]);
    }
  });
};
