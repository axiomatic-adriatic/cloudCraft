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

exports.getChannels = (userLoggedIn, callback) => {
  db.query(`select channel_id from users_channels where user_id=${userLoggedIn};`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(results, null);
    }
  })
};


exports.getChannelUsers = (channel, callback) => {
  db.query(`SELECT user_id FROM users_channels WHERE channel_id=${channel};`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(results, null);
    }
  })
};



// exports.getUserChannel = (userID, callback) => {
//   db.query(`SELECT t1.channel_id, t2.user_id FROM cloud_craft.users_channels t1 INNER JOIN cloud_craft.users_channels t2 ON t1.channel_id = t2.channel_id WHERE t1.user_id=2;`, (err, results) => {
//     if (err) {
//       callback(err, null);
//     } else {
//       let result = [];
//       for (var i = 0; i < results.length; i++) {
//         result.push(results[i].channel_id);
//       }
//       callback(result, null);
//     }
//   })
// };

exports.getUserChannel = (userID, callback) => {
  db.query(`Select channel_id from users_channels where user_id=2`, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      let result = [];
      for (var i = 0; i < results.length; i++) {
        result.push(results[i].channel_id);
      }
      callback(result, null);
    }
  })
};

exports.getDmChannel = (userLoggedIn, userClicked, callback) => {
  db.query(`SELECT dm_channel_id from direct_messages
  WHERE user_id_1=${userLoggedIn}
  AND user_id_2=${userClicked};
  `, (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(results, null);
    }
  })
};