const express = require('express');

const router = express.Router();
const taskController = require('./controller/tasks');
const usersConroller = require('./controller/userList');

router.get('/tasks', taskController.getTasks);
router.put('/task', taskController.updateTask);

router.get('/users', usersController.getUsers);

module.exports = router;
