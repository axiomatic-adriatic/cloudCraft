const express = require('express');
const router = express.Router();
const task_controller = require('./controller/tasks')


router.get('/tasks', task_controller.getTasks);

module.exports = router