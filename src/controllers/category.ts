import { Request, Response, NextFunction } from 'express'
import CategoryService from '../services/category'

const categoryService = new CategoryService()

class CategoryController {
  async GetCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await categoryService.GetCategories()

      const categories = result.map((category) => ({
        id: category._id,
        name: category.name,
        description: category.description,
        icon: category.icon,
      }))

      res.status(200).send(categories)
    } catch (error) {
      next(error)
    }
  }
}

export default CategoryController
