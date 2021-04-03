const express = require('express');

const router = express.Router();
const taskController = require('./controller/tasks');

router.get('/tasks', taskController.getTasks);

module.exports = router;
