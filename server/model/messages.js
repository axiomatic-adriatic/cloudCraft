/* eslint-disable camelcase */
const db = require('../../db/db.js');

const getMessages = (channel_id) => {
  const query = `SELECT * FROM messages WHERE channel_id = ${channel_id} ORDER BY datetime LIMIT 100`;
  return db.promise().query(query)
    .then(([messages]) => messages)
    .catch((error) => error);
};

module.exports = {
  getMessages,
};
