import { Request, Response, NextFunction } from 'express'
import CategoryService from '../services/category'

const categoryService = new CategoryService()

class CategoryController {
  async CreateCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await categoryService.CreateCategory(req.body)
      res.status(201).send(result)
    } catch (error) {
      next(error)
    }
  }
}

export default CategoryController
