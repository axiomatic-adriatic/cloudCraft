const express = require('express');

const router = express.Router();
const taskController = require('./controller/tasks');
const usersController = require('./controller/userList');

router.get('/tasks', taskController.getTasks);
router.put('/task', taskController.deleteTask);
router.get('/users', usersController.getUsers);

module.exports = router;
