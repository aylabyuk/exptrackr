import { Record } from '../models/record'

class RecordService {
  async CreateRecord(record: any) {
    const recordToAdd = new Record(record)
    return recordToAdd.save()
  }
}

export default RecordService
