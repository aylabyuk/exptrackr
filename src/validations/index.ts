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
}

export default Validators
