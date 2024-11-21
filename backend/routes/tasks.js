const express = require('express');
const {getTasks, createTask, deleteTask, completeTask}  = require('../controllers/CrudController.js')

const router = express.Router();

router.get('/', getTasks);
router.post('/', createTask);
router.delete('/:id', deleteTask);
router.patch('/:id/completed', completeTask);

module.exports = router; 