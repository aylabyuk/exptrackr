import { Router } from 'express'
import { validate } from 'express-validation'
import passport from 'passport'

import UserController from '../controllers/user'
import UserValidator from '../validations/user'

const router = Router()

const userController = new UserController()

router.post(
  '/register',
  validate(UserValidator.createUserValidator),
  userController.CreateUser,
)

router.post(
  '/login',
  validate(UserValidator.loginUserValidator),
  userController.LoginUser,
)

router.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  userController.GetLoggedInUser,
)

export { router as userRouter }
