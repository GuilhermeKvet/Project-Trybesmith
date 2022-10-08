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

const validateUserSchema = Joi.object({
  username: Joi.string().min(3).required(),
  classe: Joi.string().min(3).required(),
  level: Joi.number().min(1).required().messages({
    'string.empty': '"level" must be greater than or equal to 1',
  }),
  password: Joi.string().min(8).messages({
    'string.empty': '"password" length must be at least 8 characters long',
  }).required(),
});

const validateOrderSchema = Joi.object({
  productsIds: Joi.array().items(Joi.number().required()).required(),
});

export = {
  validateLoginSchema,
  validateProductSchema,
  validateUserSchema,
  validateOrderSchema,
};