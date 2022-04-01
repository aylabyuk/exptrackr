import { Category } from '../models/category'

class CategoryService {
  async GetCategories() {
    const categories = await Category.find()
    return categories
  }

  async GetCategoryById(categoryId: string) {
    const category = await Category.findById(categoryId)
    return category
  }
}

export default CategoryService
