/* eslint-disable camelcase */
const model = require('../model/messages');

const getMessages = (channel_id) => model.getMessages(channel_id)
  .then((messages) => messages)
  .catch((error) => error);

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
   * @param {number} message_id
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

const checkRowsMatched = (affectedRows, res) => {
  if (affectedRows) {
    res.sendStatus(200);
    return;
  }
  res.status(404).send('Already deleted or message is tasked');
};

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

// /**
//    * edit a message in the table.
//    * @param {Object} options contain channel_id, keyWord
//    * @returns {Promise<Object>} A promise that is fulfilled with an object
//    * containing the results of the query or is rejected with the the error that occurred
//    * during the query.
//  */
// const searchMessage = (keyWord, channel_id) => {
//   if (keyWord && channel_id) {
//     return model.searchMessage(keyWord, channel_id);
//   }
//   return Promise.reject(Error('Missed property'));
// };

// const searchChat = (req, res) => {
//   const { keyWord, channel_id } = req.query;
//   searchMessage(keyWord, channel_id)
//     .then((results) => {
//       res.status(200).send(results);
//     })
//     .catch((error) => {
//       res.status(500).send(error.message);
//     });
// };

module.exports = {
  getMessages,
  createMessage,
  getChatHistory,
  deleteMessage,
  deleteChat,
  editChat,
  // searchChat,
};
