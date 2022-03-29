import { Router } from 'express'

import CategoryController from '../controllers/category'

const router = Router()

const categoryController = new CategoryController()

/**
 * @swagger
 * /api/categories:
 *  get:
 *    summary: List of categories
 *    tags:
 *       - Categories
 *    description: Get all available transaction categories
 *    responses:
 *      200:
 *        description: OK
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#definitions/CategoriesResponse'
 */
router.get('/', categoryController.GetCategories)

export { router as categoryRouter }
