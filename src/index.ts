import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import passport from 'passport'

import config from './configuration/config'
import routes from './routes'
import apiErrorHandler from './middleware/apiErrorHandler'
import logger from './middleware/logger'

const app = express()

require('./configuration/passport')(passport)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(logger)
app.use(passport.initialize())

app.use('/api', routes)

app.use(apiErrorHandler)

mongoose.connect(config.mongodbconnection, {}, (error) => {
  if (error) {
    console.log(error)
  }
  console.log('connected to database')
})

mongoose.connection.once('open', () => {
  app.emit('ready')
})

app.on('ready', () => {
  app.listen(config.port, () => {
    console.log(`server is listening on port ${config.port}`)
  })
})
