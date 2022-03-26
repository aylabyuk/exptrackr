import { Schema, model } from "mongoose";

enum CardType {
  VISA = 'Visa',
  MASTERCARD = 'MasterCard',
  AMEX = 'Amex',
}

interface IAccount {
  brandName: string
  nameOnCard: string
  cardType: CardType
  maskedNumber: string
  description?: string
}

const accountSchema = new Schema<IAccount>({
  brandName: {
    type: String,
    required: true
  },
  nameOnCard: {
    type: String,
    required: true
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
    type: String
  }
})

const Account = model('Account', accountSchema)

export { Account }