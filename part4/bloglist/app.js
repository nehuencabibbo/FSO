const express = require('express')
const app = express()

const cors = require('cors')
const mongoose = require('mongoose')

const blogRouter = require('./controllers/blogs')
const logger = require('./utils/logger')

const mongoUrl = process.env.MONGODB_URI
mongoose
  .connect(mongoUrl)
  .then(() => logger.info("Connected to the DB!"))
  .catch(error => logger.error(error))

app.use(cors())
app.use(express.json())

app.use('/api/blogs', blogRouter)

module.exports = app