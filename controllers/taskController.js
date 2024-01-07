const { Task } = require('../models')

const getAllTasks = async (req, res) => {
  try {
    const authenticatedUser = req.user
    const tasks = await Task.findAll({
      where: { user_id: authenticatedUser.id },
    })
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createTask = async (req, res) => {
  const { title, completed } = req.body
  const authenticatedUser = req.user
  
  try {
    const newTask = await Task.create({ title: title, completed: completed, user_id: authenticatedUser.id})
    res.status(201).json(newTask)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const editTask = async (req, res) => {
  const { taskId } = req.params
  const { title, completed } = req.body

  try {
    const task = await Task.findByPk(taskId)

    if (!task) {
      res.status(404).json({ error: 'Task not found' })
    } else {
      await task.update({ title, completed })
      res.json(task)
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const deleteTask = async (req, res) => {
  const { taskId } = req.params

  try {
    const task = await Task.findByPk(taskId)

    if (!task) {
      res.status(404).json({ error: 'Task not found' })
    } else {
      await task.destroy()
      res.json({ message: 'Task deleted successfully' })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getAllTasks,
  createTask,
  editTask,
  deleteTask,
}
