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

  async SearchCategoriesByName(categoryNames?: string[]) {
    if (categoryNames && categoryNames.length) {
      const categories = await Category.find({
        name: {
          $in: categoryNames,
        },
      })

      return categories
    }

    const categories = await Category.find({})
    return categories
  }
}

export default CategoryService
