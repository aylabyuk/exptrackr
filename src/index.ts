import express from 'express'
import cors from 'cors'
import passport from 'passport'

import routes from './routes'
import apiErrorHandler from './middleware/apiErrorHandler'
import logger from './middleware/logger'

import config from './configuration/config'
import passportConfig from './configuration/passport'
import mongooseConfig from './configuration/mongoose'

const app = express()

passportConfig(passport)
mongooseConfig(app)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(logger)
app.use(passport.initialize())

app.use('/api', routes)

app.use(apiErrorHandler)

app.on('databaseReady', () => {
  app.listen(config.port, () => {
    console.log(`server is listening on port ${config.port}`)
  })
})
