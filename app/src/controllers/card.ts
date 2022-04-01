import { Request, Response, NextFunction } from 'express'
import ApiError from '../middleware/ApiError'
import CardService from '../services/card'

const cardService = new CardService()

class CardController {
  async GetCards(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await cardService.GetCards(req.user.username)

      if (!result) {
        next(ApiError.notFound('User information not found'))
        return
      }

      res.status(200).send(result)
    } catch (error) {
      next(error)
    }
  }
}

export default CardController
