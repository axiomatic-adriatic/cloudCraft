
const db = require('../../db/config.js')

exports.getUsers = (req, res) => {
  db.query('select user_id, name from users;', ((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  }))
  // res.send('hitting get users in controller');
};
