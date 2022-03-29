import { model, Schema } from 'mongoose'

enum RecordType {
  Income = 'income',
  Expense = 'expense',
}

interface IRecord {
  type: RecordType
  date: Date
  description: string
  amount: number
  accountId: Schema.Types.ObjectId
  categoryId: Schema.Types.ObjectId
  merchantWebsite?: string
  merchantName: string
  merchantLogo?: string
}

const recordSchema = new Schema<IRecord>(
  {
    type: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    accountId: {
      type: Schema.Types.ObjectId,
      ref: 'Account',
      index: true,
      required: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      index: true,
      required: true,
    },
    merchantWebsite: {
      type: String,
    },
    merchantName: {
      type: String,
      required: true,
    },
    merchantLogo: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
)

const Record = model('Record', recordSchema)

export { Record }
