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
}

const recordSchema = new Schema<IRecord>({
  type: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  accountId: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    index: true,
    required: true
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    index: true,
    required: true
  }
})

const Record = model('Record', recordSchema)

export { Record }