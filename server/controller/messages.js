/* eslint-disable camelcase */
const model = require('../model/messages');

const getMessages = (channel_id) => model.getMessages(channel_id)
  .then((messages) => messages)
  .catch((error) => error);

/**
   * create a new message in the table.
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

module.exports = {
  getMessages,
};
