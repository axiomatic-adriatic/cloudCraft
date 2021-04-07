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


const searchMessages = (user_id, searchString, callback) => {
    let query = `SELECT * FROM cloud_craft.messages WHERE user_id = ? AND message_text LIKE '%${searchString}%';`;
    db.query(query, [user_id], (err, results) => {

        if (err) {
            callback(err, null);
        }else{
            callback(null,results);
        }
    });
}

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
