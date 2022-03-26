import { Errback, Request, Response, NextFunction } from 'express'
import ApiError from './ApiError'

const apiErrorHandler = (
  err: Errback,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // TODO: replace with proper logging library
  console.log(err)

  if (err instanceof ApiError) {
    res.status(err.code).json(err.message)
    return
  }

  res.status(500).json('something went wrong')
}

export default apiErrorHandler
