const model = require('../model/usersInfo');

const getUserID = (req, res) => {
  const { email } = req.query;
  model.getUserID(email, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = getUserID;
