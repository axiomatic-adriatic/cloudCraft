const db = require('../../db/db');

const getTasks = (callback) => {
  db.query('SELECT * FROM tasks;', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(results, null);
    }
  });
};

const updateTask = (taskId, callback) => {
  db.query('UPDATE tasks SET is_delete =? WHERE task_id = ?', [true, taskId], (err, results) => {
    if (err) {
      callback(err, null);
      // console.log(err)
    } else {
      callback(results.protocol41, null);
      // console.log(results.protocol41);
    }
  });
};

// getTasks((err, result) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(result);
//     }
// })

// deleteTask(1, (err, result) => {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log(result);
//     }
// })

module.exports = {
  getTasks,
  updateTask,
};
