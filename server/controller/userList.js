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

  exports.getChannels = (req, res) => {
    userModel.getChannels((err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  };

  exports.getUserChannel = (req, res) => {
    const userID = req.query['user_id'];
    userModel.getUserChannel(userID, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  };

  exports.getDmChannel = (req, res) => {
    const userLoggedIn = req.query['userLoggedIn'];
    const userClicked = req.query['userClicked'];

    userModel.getDmChannel(userLoggedIn, userClicked, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  };
