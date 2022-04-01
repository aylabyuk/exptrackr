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

  async GetCardById(cardId: string, username: string) {
    const user = await User.findOne({ username })

    if (!user) {
      return null
    }

    const card = await Account.findById(cardId)

    if (card?.ownerId.toString() !== user._id.toString()) {
      return null
    }

    return card
  }

  async DecreaseCardAmount(cardId: string, amount: number) {
    const result = await Account.findByIdAndUpdate(cardId, {
      $inc: {
        balance: -Math.abs(amount),
      },
    })

    return result
  }
}

export default CardService
