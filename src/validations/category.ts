import Joi from 'joi'

const CategoryValidations = {
  createCategoryValidator: {
    body: {
      name: Joi.string().required(),
      description: Joi.string().required(),
      icon: Joi.string().required(),
    },
  },
}

export default CategoryValidations
