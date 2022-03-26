import { Request, Response, NextFunction } from 'express'
import ApiError from '../middleware/ApiError'
import UserService from '../services/user'

const userService = new UserService()

class UserController {
  async CreateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = req.body
      const result = await userService.CreateUser(user)

      res.send({
        success: true,
        message: 'User created successfully.',
        user: {
          id: result._id,
          username: result.username,
          email: result.email,
          avatar: result.avatar,
        },
      })
    } catch (error: any) {
      next(ApiError.internal('Failed to create user'))
    }
  }

  async LoginUser(req: Request, res: Response, next: NextFunction) {}
}

export default UserController
