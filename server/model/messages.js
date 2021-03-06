/* eslint-disable camelcase */
const db = require('../../db/db.js');

/**
   * get all message history for current channel_id in the table.
   * @param {number} channel_id - A number representing the channel id
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
   * TODO: LIMIT 100 add limit per request to speed up init latency
 */
const getMessages = (channel_id) => {
  const query = `SELECT messages.*, users.name FROM messages LEFT JOIN users ON users.user_id=messages.user_id WHERE channel_id = ${channel_id} ORDER BY datetime`;
  return db.promise().query(query)
    .then(([messages]) => messages)
    .catch((error) => error);
};

/**
   * get inserted message in the table.
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
const getLatest = () => db.promise().query('SELECT messages.*, users.name FROM messages LEFT JOIN users ON users.user_id=messages.user_id WHERE message_id = LAST_INSERT_ID() LIMIT 1').then(([message]) => message);

/**
   * get single message with message_id.
   * @param {number} message_id - A number representing the channel id
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
const getMessage = (message_id) => db.promise().query(`SELECT * FROM messages WHERE message_id = ${message_id} LIMIT 1`).then(([message]) => message);

/**
   * create a new message in the table, and feedback the latest message.
   * @param {Object} message - An object where the keys are column names and
   * the values are the current values. include channel_id, user_id, message_text
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
const createMessage = (message) => {
  const query = 'INSERT INTO messages SET ?;';
  return db.promise().query(query, [message]).then(() => getLatest());
};

/**
   * toggle is_delete field of message in the table.
   * @param {Number} message_id
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
const deleteMessage = (message_id) => {
  const query = 'UPDATE messages SET ? WHERE message_id=? AND disabled=false AND is_delete=false;';
  const value = {
    is_delete: true,
  };
  return db.promise().query(query, [value, message_id]);
};

/**
   * update message_text for specific message_id in the table.
   * @param {Object} message need message_id and message_text for update
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
const editMessage = (message) => {
  const { message_id, message_text } = message;
  const query = 'UPDATE messages SET ? WHERE message_id=?;';
  const value = {
    message_text,
  };
  return db.promise().query(query, [value, message_id]).then(() => getMessage(message_id));
};

/**
   * set message to disable for task
   * @param {Number} message_id need message_id and message_text for update
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
const messageToTask = (message_id) => {
  const query = 'UPDATE messages SET ? WHERE message_id=?;';
  const value = {
    disabled: true,
  };
  return db.promise().query(query, [value, message_id]);
};

module.exports = {
  getMessages,
  createMessage,
  deleteMessage,
  editMessage,
  messageToTask,
};
