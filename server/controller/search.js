const model = require('../model/search');

const searchTasks = (req, res) => {
  const { search_content, user_id } = req.query;
  model.searchTasks(user_id, search_content, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

const searchMessages = (req, res) => {
  const { search_content, user_id } = req.query;

  model.searchMessages(user_id, search_content, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = {
  searchTasks,
  searchMessages,
};
