require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const usersRouter = require('./routes/users')
const applicationsRouter = require('./routes/applications')

app.use('/users', usersRouter)
app.use('/applications', applicationsRouter)

app.listen(3000, ()=> console.log('Server on...'))