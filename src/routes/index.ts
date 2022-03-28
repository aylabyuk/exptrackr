import { Router } from 'express'

import authCheck from '../middleware/authCheck'
import { userRouter } from './user'
import { categoryRouter } from './category'

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
 *  Category:
 *    type: object
 *    properties:
 *      id:
 *        type: string
 *        description: Unique identifier of category
 *        example: "62407aa5191a8535ea977979"
 *      name:
 *        type: string
 *        description: Name of the category
 *        example: "Housing"
 *      description:
 *        type: string
 *        description: A usage or description of the category
 *        example: "Mortgage, Rent, Home insurance, Property tax, HOA, Home Maintenance, Home Improvement, Home Security"
 *      icon:
 *        type: string
 *        description: Fontawesome icon of the category
 *        example: "fa-house"
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
 *  CategoriesResponse:
 *    type: array
 *    items:
 *      type: Category
 *    example:
 *      - id: "62407aa5191a8535ea97797a"
 *        name: "Transporation"
 *        description: "Auto loan, Registration, Gas, Road/Bridge toll, Auto maintenance, Public transportation, Parking, Roadside assistance (onstar), Other forms of transportation and associated maintenance (bike, motorcycle, recreation vehicles)"
 *        icon: "fa-car-side"
 *      - id: "62407aa5191a8535ea977978"
 *        name: "Housing"
 *        description: "Mortgage, Rent, Home insurance, Property tax, HOA, Home Maintenance, Home Improvement, Home Security"
 *        icon: "fa-house"
 */

/**
 * @swagger
 * tags:
 *  - name: Users
 *  - name: Categories
 */

const router = Router()

router.use('/user', userRouter)
router.use('/categories', [authCheck], categoryRouter)

export default router
