import Joi from 'joi'

const Validators = {
  createUserValidator: {
    body: Joi.object({
      username: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().alphanum().min(6).required(),
      avatar: Joi.string().uri(),
    }),
  },
  loginUserValidator: {
    body: Joi.object({
      email: Joi.string().required().email(),
      password: Joi.string().alphanum().min(6).required(),
    }),
  },
  createRecordValidator: {
    body: Joi.object({
      date: Joi.date().required(),
      description: Joi.string().required(),
      amount: Joi.number().required(),
      accountId: Joi.string().required(),
      categoryId: Joi.string().required(),
      merchantWebsite: Joi.string(),
      merchantName: Joi.string().required(),
      merchantLogo: Joi.string(),
    }),
  },
}

export default Validators
