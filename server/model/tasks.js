const db = require('../../db/db.js');

const getTasks = (user_id, callback) => {
  const query = " SELECT *, tasks.task_id, tasks.user_id, tasks.message_id, tasks.datetime, tasks.task_text, tasks.completed, users.user_id as 'sender_id', name as 'sender_name' FROM tasks"
  + ' LEFT JOIN messages  ON messages.message_id = tasks.message_id'
  + ' LEFT JOIN users ON messages.user_id = users.user_id'
  + ' WHERE cloud_craft.tasks.user_id = ? AND cloud_craft.tasks.is_delete = false;';

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

const addTask = (user_id, task_text, callback) => {
  const post = { user_id, task_text };
  db.query('INSERT INTO tasks SET ?', [post], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const deleteTask = (task_id, callback) => {
  db.query('UPDATE tasks SET is_delete =? WHERE task_id = ?', [true, task_id], (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results.protocol41);
      // console.log(results.protocol41);
    }
  });
};

const completeTask = (task_id, callback) => {
  db.query('UPDATE tasks SET completed =? WHERE task_id = ?', [true, task_id], (err, results) => {
    if (err) {
      callback(err, null);
      // console.log(err)
    } else {
      callback(null, results.protocol41);
      // console.log(results.protocol41);
    }
  });
};

// getTasks(2, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });

// deleteTask(1, (err, result) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(result);
//     }
// })

// completeTask(2, (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// })

// addTask(2, "set up endpoint for getTask router", (err, result) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(result);
//   }
// })

module.exports = {
  getTasks,
  addTask,
  deleteTask,
  completeTask,
};
