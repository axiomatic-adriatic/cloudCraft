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
   * get inserted message in the table.
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
const getLatest = () => db.promise().query('SELECT * FROM messages WHERE message_id = LAST_INSERT_ID() LIMIT 1').then(([message]) => message);

/**
   * get single message with message_id.
   * @param {number} message_id - A number representing the channel id
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
const getMessage = (message_id) => db.promise().query(`SELECT * FROM messages WHERE message_id = ${message_id} LIMIT 1`).then(([message]) => message);

/**
   * create a new message in the table.
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
   * toggle is delete of message in the table.
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
   * update message in the table.
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
   * search message in the table.
   * @param {String} keyWord need message_id and message_text for update
   * @param {Number} channel_id need message_id and message_text for update
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
// const searchMessage = (keyWord, channel_id) => {
//   const query = 'SELECT messages.*, users.name FROM messages '
//   + 'LEFT JOIN users ON users.user_id=messages.user_id '
//   + `WHERE (messages.message_text LIKE "%${keyWord}%" OR users.name LIKE "%${keyWord}%") `
//   + 'AND channel_id = ? ORDER BY datetime LIMIT 100';
//   return db.promise().query(query, channel_id)
//     .then(([results]) => results)
//     .catch((error) => error);
// };

module.exports = {
  getMessages,
  createMessage,
  deleteMessage,
  editMessage,
  // searchMessage,
};
