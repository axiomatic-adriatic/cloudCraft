/* eslint-disable camelcase */
const db = require('../../db/db.js');

/**
   * create a new message in the table.
   * @param {number} channel_id - A number representing the channel id
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
const getMessages = (channel_id) => {
  const query = `SELECT messages.*, users.name FROM messages LEFT JOIN users ON users.user_id=messages.user_id WHERE channel_id = ${channel_id} ORDER BY datetime LIMIT 100`;
  return db.promise().query(query)
    .then(([messages]) => messages)
    .catch((error) => error);
};

/**
   * create a new message in the table.
   * @param {Object} message - An object where the keys are column names and
   * the values are the current values. include channel_id, user_id, message_text
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
const createMessage = (message) => {
  const query = 'INSERT INTO messages SET ?';
  return db.promise().query(query, [message]);
};

module.exports = {
  getMessages,
  createMessage,
};
