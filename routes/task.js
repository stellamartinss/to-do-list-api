const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')


router.get('/list-tasks', taskController.getAllTasks)
router.post('/create-task', taskController.createTask)
router.put('/edit-task/:taskId', taskController.editTask)
router.delete('/delete-task/:taskId', taskController.deleteTask)

module.exports = router