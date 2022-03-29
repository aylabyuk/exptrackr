import UserService from '../../services/user'
import { Account, CardType } from '../account'

const SEED_USERS = [
  {
    username: 'johndoe',
    email: 'johndoe@gmail.com',
    password: 'password123',
    cards: [
      {
        nameOnCard: 'John Doe',
        cardType: CardType.MASTERCARD,
        maskedNumber: '1234 56XX XXXXX 5678',
        description: 'may personal card',
        balance: 4000.0,
      },
    ],
  },
  {
    username: 'thevinci',
    email: 'oriel.absin@gmail.com',
    password: 'password123',
    cards: [
      {
        nameOnCard: 'Oriel Vinci Absin',
        cardType: CardType.VISA,
        maskedNumber: '1112 44XX XXXXX 6340',
        description: 'company issued pay account',
        balance: 22000.0,
      },
      {
        nameOnCard: 'Oriel Vinci Absin',
        cardType: CardType.AMEX,
        maskedNumber: '5555 22XX XXXXX 1111',
        description: 'for personal usage',
        balance: 22000.0,
      },
    ],
  },
]

const userService = new UserService()

// seed users
const userSeeder = () =>
  Promise.all(
    SEED_USERS.map((seedUser, index) =>
      userService
        .CreateUser({
          username: seedUser.username,
          email: seedUser.email,
          password: seedUser.password,
          avatar: `https://robohash.org/${seedUser.username}`,
        })
        .then((user) => {
          console.log({
            message: `successfully seeded user ${seedUser.username}`,
          })

          return user
        })
        .then((user) => {
          // seed accounts for user
          return Promise.all(
            SEED_USERS[index].cards.map((card) =>
              Account.create({ ...card, ownerId: user._id }).then((account) =>
                console.log({
                  message: `account ${account.cardType} created for ${user.username}`,
                }),
              ),
            ),
          )
        })
        .catch((err) => {
          console.log(err)
        }),
    ),
  )

export default userSeeder
