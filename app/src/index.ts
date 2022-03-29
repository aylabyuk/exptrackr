import express from 'express'
import cors from 'cors'
import passport from 'passport'

import routes from './routes'
import apiErrorHandler from './middleware/apiErrorHandler'
import logger from './middleware/logger'

import config from './configuration/config'
import passportConfig from './configuration/passport'
import mongooseConfig from './configuration/mongoose'

import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const app = express()

const options: swaggerJsDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Expense Tracker API',
      version: '1.0.0',
      description: 'A simple Expense Tracker API written in Express',
    },
    servers: [
      {
        url: `http://localhost:${config.port}`,
      },
      {
        url: `http://localhost:80`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
}

const specs = swaggerJsDoc(options)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs))

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
