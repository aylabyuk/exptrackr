import mongoose from 'mongoose'

enum RecordType {
  Income = 'income',
  Expense = 'expense',
}

interface IRecord {
  type: RecordType
  date: Date
  description: string
  amount: number
}

const recordSchema = new mongoose.Schema<IRecord>({
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
})

const Record = mongoose.model('Record', recordSchema)

export { Record }