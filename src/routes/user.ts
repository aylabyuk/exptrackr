import { Router } from 'express'
import { validate } from 'express-validation'

import UserController from '../controllers/user'
import UserValidator from '../validations/user'

const router = Router()

const userController = new UserController()

router.post(
  '/user/register',
  validate(UserValidator.createUserValidator),
  userController.CreateUser,
)

router.post('/user/login', userController.LoginUser)

export { router as userRouter }
