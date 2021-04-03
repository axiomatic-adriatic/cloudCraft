const model = require('../tasks');

const getTasks = (req, res) => {
  model.getTasks((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = {
  getTasks,
};
