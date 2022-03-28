import { Category } from '../models/category'

class CategoryService {
  async GetCategories() {
    const categories = await Category.find()
    return categories
  }
}

export default CategoryService
