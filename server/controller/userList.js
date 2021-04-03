const userModel = require('../model/users');

  exports.getUsers = (req, res) => {
    userModel.getUsers((err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  };
