const express = require('express');

const router = express.Router();
const taskController = require('./controller/tasks');
const usersController = require('./controller/userList');
const getUserID = require('./controller/usersInfo');

router.get('/tasks', taskController.getTasks);
router.post('/task', taskController.addTask);
router.put('/task/delete', taskController.deleteTask);
router.put('/task/complete', taskController.completeTask);

router.get('/users', usersController.getUsers);
router.get('/channels', usersController.getChannels);

router.get('/userInfo', getUserID);

module.exports = router;
