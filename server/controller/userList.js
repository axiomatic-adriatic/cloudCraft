const userModel = require('../model/users');

exports.getChannelName = (req, res) => {
  const { channel } = req.query;
  userModel.getChannelName(channel, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result.body);
    }
  });
};

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
    const userLoggedIn = req.query['userLoggedIn'];
    userModel.getChannels(userLoggedIn, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  };


  exports.getDirectMessages = (req, res) => {
    const { userLoggedIn } = req.query;
    userModel.getDirectMessages(userLoggedIn, (err, result) => {
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

  exports.getChannelUsers = (req, res) => {
    const channel = req.query.channel;
    userModel.getChannelUsers(channel, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    })
  };



  // exports.getDmChannel = (req, res) => {
  //   const userLoggedIn = req.query['userLoggedIn'];
  //   const userClicked = req.query['userClicked'];

  //   userModel.getDmChannel(userLoggedIn, userClicked, (err, result) => {
  //     if (err) {
  //       res.send(err);
  //     } else {
  //       res.send(result);
  //     }
  //   })
  // };
