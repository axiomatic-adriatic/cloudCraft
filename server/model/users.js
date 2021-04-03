const db = require('../../db/db.js')

exports.getUsers = (callback) => {
  db.query('select user_id, name from users;', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(results, null);
    }
  })
};
