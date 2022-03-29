import { Request, Response, NextFunction } from 'express'
import RecordService from '../services/record'

const recordService = new RecordService()

class RecordController {
  async CreateExpenseRecord(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await recordService.CreateRecord({
        ...req.body,
        type: 'expense',
      })
      res.status(201).send(result)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  async CreateIncomeRecord(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await recordService.CreateRecord({
        ...req.body,
        type: 'income',
      })
      res.status(201).send(result)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }
}

export default RecordController
