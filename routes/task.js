const express = require('express')
const router = express.Router()
const taskController = require('../controllers/taskController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/list-tasks', authMiddleware, taskController.getAllTasks)
router.post('/create-task', authMiddleware,  taskController.createTask)
router.put('/edit-task/:taskId', authMiddleware,  taskController.editTask)
router.delete('/delete-task/:taskId', authMiddleware,  taskController.deleteTask)

module.exports = router
