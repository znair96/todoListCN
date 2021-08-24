const express = require('express');

const router = express.Router();

const indexPageController = require('../controllers/indexPageController');

const taskActionController = require('../controllers/taskActionController');

router.get('/',indexPageController.todoPage);

router.post('/taskAction',taskActionController.taskAction);

module.exports = router;