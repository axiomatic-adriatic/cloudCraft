const express = require('express');

const router = express.Router();
const taskController = require('./controller/tasks');

router.get('/tasks', taskController.getTasks);
router.put('/task', taskController.updateTask);

module.exports = router;
