/* eslint-disable camelcase */
const model = require('../model/messages');

const getMessages = (channel_id) => model.getMessages(channel_id)
  .then((messages) => messages)
  .catch((error) => error);

module.exports = {
  getMessages,
};
