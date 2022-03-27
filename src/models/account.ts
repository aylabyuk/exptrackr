import { Schema, model } from 'mongoose'

enum CardType {
  VISA = 'Visa',
  MASTERCARD = 'MasterCard',
  AMEX = 'Amex',
}

interface IAccount {
  nameOnCard: string
  cardType: CardType
  maskedNumber: string
  description?: string
  balance: number
  ownerId: Schema.Types.ObjectId
}

const accountSchema = new Schema<IAccount>({
  nameOnCard: {
    type: String,
    required: true,
    uppercase: true,
  },
  cardType: {
    type: String,
    required: true,
  },
  maskedNumber: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  balance: {
    type: Number,
    default: 0.0,
  },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    required: true,
  },
})

const Account = model('Account', accountSchema)

export { Account, CardType, IAccount }
