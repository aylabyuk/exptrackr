import Joi from 'joi'

const UserValidations = {
  createUserValidator: {
    body: Joi.object({
      username: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().alphanum().min(6).required(),
      avatar: Joi.string().uri(),
    }),
  },
}

export default UserValidations
