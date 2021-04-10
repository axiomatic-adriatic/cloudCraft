/* eslint-disable camelcase */
const messages = require('../model/messages');
const tasks = require('../model/tasks');

/**
 * a middleware to add a message to task
 * @module addMessageToTask
 * @function
 * @param {Object} req The request.
 * @param {Object} res The response.
 * @param {Number} req.body.user_id user id of current user.
 * @param {Number} req.body.message_id message id of the message want to be add as a text.
 * @param {String} req.body.message_text text of that message or modified text by current user.
 * @return {undefined}
 */
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
