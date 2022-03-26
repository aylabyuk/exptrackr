import express from 'express'
import mongoose from 'mongoose'
import { json } from 'body-parser'

import { recordRouter } from './routes/record'

require('dotenv').config()

const app = express()
app.use(json())
app.use(recordRouter)

mongoose.connect(
  process.env.MONGODB_CONNECTION || '',
  {},
  (error) => {
    if (error) {
      console.log(error)
    }
    console.log('connected to database')
  },
)

app.listen(3000, () => {
  console.log('server is listening on port 3000')
})
