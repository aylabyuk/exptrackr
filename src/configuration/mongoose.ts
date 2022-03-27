import { Express } from 'express'

import mongoose from 'mongoose'
import config from './config'

const mongooseConfig = (app?: Express) => {
  mongoose.connect(config.mongodbconnection)

  const db = mongoose.connection

  db.on('error', () => console.log('mongodb error'))

  if (app) {
    db.once('open', () => {
      console.log('successfully connected to database')
      app.emit('databaseReady')
    })
  }

  return db
}

export default mongooseConfig
