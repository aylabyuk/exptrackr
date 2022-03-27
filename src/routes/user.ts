import { Router } from 'express'
import { validate } from 'express-validation'
import passport from 'passport'

import UserController from '../controllers/user'
import UserValidator from '../validations/user'

const router = Router()

const userController = new UserController()

/**
 * @swagger
 * /api/user/register:
 *  post:
 *    summary: Register a new user
 *    tags:
 *      - Users
 *    description: Create a new user of the expense tracker app
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/definitions/User'
 *    responses:
 *      201:
 *        description: User registered successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/UserResponse'
 *      409:
 *        description: Username or email already exist
 *      500:
 *        description: User registration failed
 */
router.post(
  '/register',
  validate(UserValidator.createUserValidator),
  userController.CreateUser,
)

/**
 * @swagger
 * /api/user/login:
 *  post:
 *    summary: User login
 *    tags:
 *      - Users
 *    description: Login to an existing user account
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/definitions/UserCredentials'
 *    responses:
 *      200:
 *        description: Successfull login
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/LoginResponse'
 *      403:
 *        description: Wrong password, forbidden
 *      500:
 *        description: Login failed
 */
router.post(
  '/login',
  validate(UserValidator.loginUserValidator),
  userController.LoginUser,
)

/**
 * @swagger
 * /api/user/me:
 *  get:
 *    summary: Current user
 *    tags:
 *      - Users
 *    description: Get information about the current logged-in user
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/definitions/UserResponse'
 *      401:
 *        description: Unauthorized
 */
router.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  userController.GetLoggedInUser,
)

export { router as userRouter }
