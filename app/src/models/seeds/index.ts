import db from '../../configuration/mongoose'
import userSeeder from './userSeeder'
import categorySeeder from './categorySeeder'

const connection = db()

connection.once('open', async () => {
  await userSeeder()
  await categorySeeder()

  connection.close()
})
