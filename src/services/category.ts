import { Category, ICategory } from '../models/category'

class CategoryService {
  async CreateCategory(category: ICategory) {
    const categoryToAdd = new Category(category)

    return categoryToAdd.save()
  }
}

export default CategoryService
