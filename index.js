const express = require('express')
const bodyParser = require('body-parser')
const taskRoutes = require('./routes/task')
const authRoutes = require('./routes/auth')
const userRoutes = require('./routes/user')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())
app.use('/tasks', taskRoutes)
app.use('/auth', authRoutes)
app.use('/user', userRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})