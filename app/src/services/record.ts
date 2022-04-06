import mongoose from 'mongoose'
import { Record } from '../models/record'

class RecordService {
  async CreateRecord(record: any) {
    const recordToAdd = new Record(record)
    return recordToAdd.save()
  }

  async GetRecentTransactions(accountIds: string[]) {
    const records = Record.find(
      {
        accountId: {
          $in: accountIds.map((id) => new mongoose.Types.ObjectId(id)),
        },
      },
      null,
      { sort: { createdAt: 'desc' }, limit: 8 },
    ).populate('categoryId')

    return records
  }

  async GetFilteredRecords(
    accountIds: mongoose.Types.ObjectId[],
    categories: mongoose.Types.ObjectId[],
    search: string,
  ) {
    const records = Record.find(
      {
        accountId: {
          $in: accountIds.map((id) => new mongoose.Types.ObjectId(id)),
        },
        categoryId: {
          $in: categories.map((id) => new mongoose.Types.ObjectId(id)),
        },
        description: { $regex: search || '', $options: 'i' },
      },
      null,
      { sort: { createdAt: 'desc' } },
    ).populate('categoryId')

    return records
  }
}

export default RecordService
