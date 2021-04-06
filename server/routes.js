const express = require('express');

const router = express.Router();
const taskController = require('./controller/tasks');
const usersController = require('./controller/userList');

router.get('/tasks', taskController.getTasks);
router.post('/task', taskController.addTask);
router.put('/task/delete', taskController.deleteTask);
router.put('/task/complete', taskController.completeTask);

router.get('/users', usersController.getUsers);
router.get('/channels', usersController.getChannels);
router.get('/userChannel', usersController.getUserChannel);

module.exports = router;
