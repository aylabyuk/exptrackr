import { Router } from 'express'

import authCheck from '../middleware/authCheck'
import { userRouter } from './user'
import { categoryRouter } from './category'
import { recordRouter } from './record'
import { cardRouter } from './card'

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
 *  Card:
 *    type: object
 *    properties:
 *      id: string
 *      description: Unique identifier of card
 *      example: "62407aa5191a8535ea977979"
 *    nameOnCard:
 *      id: string
 *      description: Name written on the card
 *      example: "Oriel Vinci Absin"
 *    cardType:
 *      id: string
 *      description: Type of card
 *      example: Visa
 *    maskedNumber:
 *      id: string
 *      description: Onfuscated card number
 *      example: "4111 11XX XXXX XXXX 1111"
 *    description:
 *      id: string
 *      description: Description of the card, set by the user
 *      example: "My personal card for personal stuff"
 *    balance:
 *      id: number
 *      description: The remaining amount on the card
 *      example: 22000
 *    ownerId:
 *      id: string
 *      description: The identification number of the user of the card
 *      example: "62407aa5191a8535ea977979"
 *  Record:
 *    type: object
 *    properties:
 *      date:
 *        type: date-time
 *        description: DateTime of the transaction
 *        example: 2017-07-21T17:32:28Z
 *      description:
 *        type: string
 *        description: A short description about the transaction
 *        example: "Mortgage, Rent, Home insurance, Property tax, HOA, Home Maintenance, Home Improvement, Home Security"
 *      amount:
 *        type: number
 *        description: Transaction amount
 *        example: 20.50
 *      accountId:
 *        type: string
 *        description: Card account that the transaction will use
 *        example: "62507aa3191a8125eb9"
 *      categoryId:
 *        type: string
 *        description: Category id where this transaction belong
 *        example: "12122aa31768s125eb9"
 *      merchantWebsite:
 *        type: string
 *        description: Website of the merchant
 *        example: "spotify.com"
 *      merchantName:
 *        type: string
 *        description: Name of the merchant for the transaction
 *        example: "Spotify"
 *      merchantLogo:
 *        type: string
 *        description: Logo of the Merchant
 *        example: "https://logo.clearbit.com/spotify.com"
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
 *  CardsResponse:
 *    type: array
 *    items:
 *      type: Card
 */

/**
 * @swagger
 * tags:
 *  - name: Users
 *  - name: Categories
 *  - name: Records
 *  - name: Cards
 */

const router = Router()

router.use('/user', userRouter)
router.use('/categories', [authCheck], categoryRouter)
router.use('/record', [authCheck], recordRouter)
router.use('/cards', [authCheck], cardRouter)

export default router
