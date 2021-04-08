const model = require('../model/search');

const searchTasks = (req, res) => {
  const { keyWord, user_id } = req.query;
  console.log(req.query)
  model.searchTasks(user_id, keyWord, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
};

// const searchMessages = (req, res) => {
//   const { search_content, user_id } = req.query;

//   model.searchMessages(user_id, search_content, (err, result) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(result);
//     }
//   });
// };

/**
   * edit a message in the table.
   * @param {Object} options contain channel_id, keyWord
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
 const searchMessages = (keyWord, channel_id) => {
  if (keyWord && channel_id) {
    return model.searchMessages(keyWord, channel_id);
  }
  return Promise.reject(Error('Missed property'));
};

const searchChat = (req, res) => {
  const { keyWord, channel_id } = req.query;
  // console.log(req.query)
  searchMessages(keyWord, channel_id)
    .then((results) => {
      res.status(200).send(results);
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};


module.exports = {
  searchTasks,
  searchChat,
};
