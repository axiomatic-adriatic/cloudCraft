const db = require('../../db/db.js');

const searchTasks = (user_id, searchString, callback) => {
  const query = "SELECT tasks.task_id,tasks.user_id,tasks.message_id,tasks.datetime,tasks.task_text,tasks.completed,users.user_id as 'sender_id',name as 'sender_name' FROM tasks"
        + ' LEFT JOIN messages ON messages.message_id = tasks.message_id LEFT JOIN users ON messages.user_id = users.user_id'
        + ` WHERE (cloud_craft.tasks.user_id = ? AND cloud_craft.tasks.is_delete = false) AND task_text LIKE '%${searchString}%';`;

  db.query(query, [user_id], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      const taskArray = [];
      for (let i = 0; i < results.length; ++i) {
        let result = {};
        const {
          task_id, user_id, message_id, datetime, task_text, completed,
        } = results[i];
        result = {
          task_id, user_id, message_id, datetime, task_text, completed,
        };
        result.sender = {
          sender_id: results[i].sender_id,
          sender_name: results[i].sender_name,
        };
        taskArray.push(result);
      }
      // console.log(taskArray);
      callback(null, taskArray);
    }
  });
};

/**
   * search message in the table.
   * @param {String} keyWord need message_id and message_text for update
   * @param {Number} channel_id need message_id and message_text for update
   * @returns {Promise<Object>} A promise that is fulfilled with an object
   * containing the results of the query or is rejected with the the error that occurred
   * during the query.
 */
 const searchMessages = (keyWord, channel_id) => {
  const query = 'SELECT messages.*, users.name FROM messages '
  + 'LEFT JOIN users ON users.user_id=messages.user_id '
  + `WHERE (messages.message_text LIKE "%${keyWord}%" OR users.name LIKE "%${keyWord}%") `
  + 'AND channel_id = ? ORDER BY datetime LIMIT 100';
  return db.promise().query(query, channel_id)
    .then(([results]) => results)
    .catch((error) => error);
};

// searchTasks(2, 'cras', (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

module.exports = {
  searchTasks,
  searchMessages,
};
