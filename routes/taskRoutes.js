const express = require('express');

const router = express.Router();

const indexPageController = require('../controllers/indexPageController');

const addTaskController = require('../controllers/addTaskController');

const removeTaskController = require('../controllers/removeTaskController');
router.get('/',indexPageController.todoPage);

router.post('/taskAction',addTaskController.addTask);

// router.post('/removetask',removeTaskController.deleteTasks);

module.exports = router;