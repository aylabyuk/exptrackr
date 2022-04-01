import { Account } from '../models/account'
import { IUser, User } from '../models/user'

class CardService {
  async GetCards(username: string) {
    const user = await User.findOne({ username })

    if (!user) {
      return null
    }

    const categories = await Account.find({
      ownerId: user._id,
    })
    return categories
  }

  async GetCardById(cardId: string, username: string) {
    const user = await User.findOne({ username })

    if (!user) {
      return null
    }

    const card = await Account.find({ ownerId: user.id })
    return card
  }
}

export default CardService
