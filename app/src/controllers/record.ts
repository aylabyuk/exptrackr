import { Request, Response, NextFunction } from 'express'
import ApiError from '../middleware/ApiError'
import CardService from '../services/card'
import CategoryService from '../services/category'
import RecordService from '../services/record'

const recordService = new RecordService()
const cardService = new CardService()
const categoryService = new CategoryService()
class RecordController {
  async CreateExpenseRecord(req: Request, res: Response, next: NextFunction) {
    try {
      const username = req.user.username

      // verify if owner owns the account
      const card = await cardService.GetCardById(req.body.cardId, username)
      if (!card) {
        next(ApiError.badRequest('Account does not exist'))
        return
      }

      // verify if the category exist
      const category = await categoryService.GetCategoryById(
        req.body.categoryId,
      )
      if (!category) {
        next(ApiError.badRequest('Category does not exist'))
        return
      }

      // decrease card balance
      await cardService.DecreaseCardAmount(req.body.cardId, req.body.amount)

      // record the transaction
      await recordService.CreateRecord({
        ...req.body,
        accountId: card._id,
        amount: -Math.abs(req.body.amount),
        date: new Date(),
        type: 'expense',
      })

      res.status(201).send('OK')
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
