import { Router } from 'express'
import { validate } from 'express-validation'

import CategoryController from '../controllers/category'
import CategoryValidations from '../validations/category'

const router = Router()

const categoryController = new CategoryController()

router.post(
  '/create',
  validate(CategoryValidations.createCategoryValidator),
  categoryController.CreateCategory,
)

export { router as categoryRouter }
