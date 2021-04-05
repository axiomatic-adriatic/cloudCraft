const model = require('../model/tasks');

const getTasks = (req, res) => {
    const { user_id } = req.query;
    model.getTasks(user_id, (err, result) => {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });
};

const deleteTask = (req, res) => {
    const { task_id } = req.query;
    model.deleteTask(task_id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    });
};

const completeTask = (req, res) => {
    const { task_id } = req.query;
    model.completeTask(task_id, (err, results) => {
        if (err) {
            res.send(err);
        } else {
            res.send(results);
        }
    })
}

module.exports = {
    getTasks,
    deleteTask,
    completeTask
};
