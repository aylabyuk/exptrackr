import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import config from './configuration/config'
import { recordRouter } from './routes/record'
import { userRouter } from './routes/user'
import apiErrorHandler from './middleware/apiErrorHandler'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(recordRouter)
app.use(userRouter)

mongoose.connect(config.mongodbconnection || '', {}, (error) => {
  if (error) {
    console.log(error)
  }
  console.log('connected to database')
})

app.use(apiErrorHandler)

app.listen(config.port, () => {
  console.log(`server is listening on port ${config.port}`)
})
