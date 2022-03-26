import { Errback, Request, Response, NextFunction } from 'express'
import ApiError from './ApiError'

const apiErrorHandler = (
  err: Errback,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof ApiError) {
    res.status(err.code).json(err.message)
    return
  }

  res.status(500).json('something went wrong')
}

export default apiErrorHandler
