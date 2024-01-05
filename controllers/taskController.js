const { Task } = require('../models')

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll()
    res.json(tasks)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

const createTask = async (req, res) => {
  const { title, completed } = req.body

  try {
    const newTask = await Task.create({ title, completed })
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
  deleteTask
}
