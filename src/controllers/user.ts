import { Request, Response, NextFunction } from 'express'
import ApiError from '../middleware/ApiError'
import UserService from '../services/user'

const userService = new UserService()

class UserController {
  async CreateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await userService.CreateUser(req.body)

      res.status(201).send({
        username: result.username,
        email: result.email,
        avatar: result.avatar,
      })
    } catch (error: any) {
      if (error.code === 11000) {
        next(ApiError.conflict('Username or email already exist'))
      }
    }
  }

  async LoginUser(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await userService.LoginUser(req.body)
      res.status(200).send(result)
    } catch (error: any) {
      next(error)
    }
  }

  async GetLoggedInUser(req: Request, res: Response, next: NextFunction) {
    res.status(200).send({
      username: req.user.username,
      email: req.user.email,
      avatar: req.user.avatar,
    })
  }
}

export default UserController
