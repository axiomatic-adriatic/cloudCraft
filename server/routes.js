const express = require('express');
const router = express.Router();
const task_controller = require('./controller/tasks');
const users_controller = require('./controller/userList');


router.get('/tasks', task_controller.getTasks);

router.get('/users', users_controller.getUsers);

module.exports = router