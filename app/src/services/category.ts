import { Category } from '../models/category'

class CategoryService {
  async GetCategories() {
    const categories = await Category.find({ name: { $ne: 'Income' } })
    return categories
  }

  async GetCategoryById(categoryId: string) {
    const category = await Category.findById(categoryId)
    return category
  }

  async GetIncomeCategory() {
    const incomeCategory = await Category.findOne({ name: 'Income' })
    return incomeCategory
  }
}

export default CategoryService
