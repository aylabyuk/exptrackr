import { Types } from 'mongoose'
import db from '../../configuration/mongoose'
import UserService from '../../services/user'

const SEED_USERS = [
  {
    username: 'johndoe',
    email: 'johndoe@gmail.com',
    password: 'password123',
  },
  {
    username: 'thevinci',
    email: 'oriel.absin@gmail.com',
    password: 'password123',
  },
]

const userService = new UserService()

const connection = db()

connection.once('open', async () => {
  // seed users
  const newUsers = await Promise.all(
    SEED_USERS.map(async (seedUser) =>
      userService
        .CreateUser({
          ...seedUser,
          avatar: `https://robohash.org/${seedUser.username}`,
        })
        .then((user) => {
          console.log({
            message: `successfully seeded user ${seedUser.username}`,
          })

          return user
        })
        .catch((err) => {
          console.log({
            message: `failed to seed user ${seedUser.username}`,
            err,
          })
        }),
    ),
  )

  connection.close()
})
