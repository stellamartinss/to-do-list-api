const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/get-user-profile', authMiddleware, userController.getUser)

module.exports = router
