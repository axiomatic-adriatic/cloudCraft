const express = require('express');

const router = express.Router();
const taskController = require('./controller/tasks');
const usersController = require('./controller/userList');
const getUserID = require('./controller/usersInfo');
const messagesController = require('./controller/messages');
const searchController = require('./controller/search');

router.get('/tasks', taskController.getTasks);
router.post('/task', taskController.addTask);
router.put('/task/delete', taskController.deleteTask);
router.put('/task/complete', taskController.completeTask);

router.get('/users', usersController.getUsers);
router.get('/channels', usersController.getChannels);
router.get('/userChannel', usersController.getUserChannel);

router.get('/chat', messagesController.getChatHistory);
router.post('/chat', messagesController.editChat);
router.put('/chat/delete', messagesController.deleteChat);
// router.get('/chat/search', messagesController.searchChat);

router.get('/userInfo', getUserID);

router.get('/search/tasks', searchController.searchTasks);
router.get('/search/messages', searchController.searchChat);

module.exports = router;
