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

exports.getChannels = (callback) => {
  db.query('select channel_id, channel_name from channels;', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(results, null);
    }
  })
};
