/* eslint-disable camelcase */
const messages = require('../model/messages');
const tasks = require('../model/tasks');

const addMessageToTask = (req, res) => {
  const { user_id, message_text, message_id } = req.body;
  messages.messageToTask(message_id)
    .then(() => {
      tasks.addTask(user_id, message_text, message_id, (err, results) => {
        if (err) {
          res.status(500).send(err.message);
        } else {
          res.status(200).send(results);
        }
      });
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

module.exports = {
  addMessageToTask,
};
