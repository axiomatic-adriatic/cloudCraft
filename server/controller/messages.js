/* eslint-disable camelcase */
const model = require('../model/messages');

/**
   * get messages history from message model
   * @param {Number} channel_id - A number as current channel id
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
const getMessages = (channel_id) => model.getMessages(channel_id)
  .then((messages) => messages)
  .catch((error) => error);

/**
 * a middleware to get messages history from specific channel id
 * @module getChatHistory
 * @function
 * @param {Object} req The request.
 * @param {Object} res The response.
 * @param {Number} req.query.channel_id channel id current user selected.
 * @return {undefined}
 */
const getChatHistory = (req, res) => {
  const { channel_id } = req.query;
  getMessages(channel_id)
    .then((messages) => {
      res.status(200).send(messages);
    })
    .catch((error) => error);
};

/**
   * create a new message in the table.
   * verify all necessary arguments before invoking message controller
   * @param {Object} message - An object where the keys are column names and
   * the values are the current values. include channel_id, user_id, message_text
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
const createMessage = (message) => {
  const { channel_id, user_id, message_text } = message;
  if (channel_id && user_id && message_text) {
    return model.createMessage(message);
  }
  return Promise.reject(Error('have empty property'));
};

/**
   * delete a message in the table.
   * verify all necessary arguments before invoking message controller
   * @param {Number} message_id
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
const deleteMessage = (message_id) => {
  if (message_id) {
    return model.deleteMessage(message_id);
  }
  return Promise.reject(Error('Missed message id'));
};

/**
   * check is there any rows in table been deleted
   * response depends on number of affectedRows
   * @param {Number} affectedRows
 */
const checkRowsMatched = (affectedRows, res) => {
  if (affectedRows) {
    res.sendStatus(200);
    return;
  }
  res.status(404).send('Already deleted or message is tasked');
};

/**
 * a middleware to delete message of that message id
 * @module deleteChat
 * @function
 * @param {Object} req The request.
 * @param {Object} res The response.
 * @param {Number} req.query.message_id message_id of the message user wants to delete.
 * @return {undefined}
 */
const deleteChat = (req, res) => {
  const { message_id } = req.query;
  deleteMessage(message_id)
    .then(([result]) => {
      checkRowsMatched(result.affectedRows, res);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

/**
   * edit a message in the table.
   * verify all necessary arguments before invoking message controller
   * @param {Object} message contain messge_id, message_text
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
const editMessage = (message) => {
  const { message_id, message_text } = message;
  if (message_id && message_text) {
    return model.editMessage(message);
  }
  return Promise.reject(Error('Missed property'));
};

/**
 * a middleware to update message_text for specific message_id
 * @module editChat
 * @function
 * @param {Object} req The request.
 * @param {Object} res The response.
 * @param {Object} req.query.message an object contains message_id and message_text
 * @return {undefined}
 */
const editChat = (req, res) => {
  const { message } = req.body;
  editMessage(message)
    .then((modifiedMessage) => {
      res.status(200).send(modifiedMessage);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

module.exports = {
  getMessages,
  createMessage,
  getChatHistory,
  deleteMessage,
  deleteChat,
  editChat,
};
