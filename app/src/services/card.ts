import { Account } from '../models/account'
import { User } from '../models/user'

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
}

export default CardService
