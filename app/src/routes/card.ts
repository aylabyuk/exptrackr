import { Router } from 'express'
import CardController from '../controllers/card'

const router = Router()

const cardController = new CardController()

/**
 * @swagger
 * /api/cards:
 *  get:
 *    summary: List of cards for the current user
 *    tags:
 *       - Cards
 *    description: Get all bank cards information for the current user
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#definitions/CardsResponse'
 */
router.get('/', cardController.GetCards)

export { router as cardRouter }
