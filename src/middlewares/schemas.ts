import Joi from 'joi';

const validateLoginSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

const validateProductSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.empty': '"name" must be a string',
  }),
  amount: Joi.string().min(3).required().messages({
    'string.empty': '"amount" must be a string',
  }),
});

export = {
  validateLoginSchema,
  validateProductSchema,
};