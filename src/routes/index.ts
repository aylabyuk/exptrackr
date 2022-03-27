import { Router } from 'express'
import { userRouter } from './user'
import { recordRouter } from './record'
import { categoryRouter } from './category'
import authCheck from '../middleware/authCheck'

/**
 * @swagger
 * definitions:
 *  User:
 *    type: object
 *    properties:
 *      username:
 *        type: string
 *        description: Username of the user
 *        example: "awesomeGuy123"
 *      email:
 *        type: string
 *        description: Email address of the user
 *        example: "awesome@gmail.com"
 *      password:
 *        type: string
 *        description: Password of the user
 *        example: "password123"
 *      avatar:
 *        type: string
 *        description: Url of the user's display picture
 *        example: "https://robohash.org/awesomeguy"
 *  UserCredentials:
 *    type: object
 *    properties:
 *      email:
 *        type: string
 *        description: Email address of the user
 *        example: "awesome@gmail.com"
 *      password:
 *        type: string
 *        description: Password of the user
 *        example: "password123"
 *  UserResponse:
 *    type: object
 *    properties:
 *      username:
 *        type: string
 *        description: Username of the user
 *        example: "awesomeGuy123"
 *      email:
 *        type: string
 *        description: Email address of the user
 *        example: "awesome@gmail.com"
 *      avatar:
 *        type: string
 *        description: Url of the user's display picture
 *        example: "https://robohash.org/awesomeguy"
 *  LoginResponse:
 *    type: object
 *    properties:
 *      token:
 *        type: string
 *        description: "The token to be used for subsequent api requests"
 *        example: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJz..."
 *      expires:
 *        type: string
 *        description: "Lifespan of the genrated token"
 *        example: "1d"
 */

/**
 * @swagger
 * tags:
 *  - name: Users
 *  - name: Records
 *  - name: Category
 */

const router = Router()

router.use('/user', userRouter)
router.use('/category', [authCheck], categoryRouter)
router.use('/records', recordRouter)

export default router
