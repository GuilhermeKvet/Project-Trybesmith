import { NextFunction, Request, Response } from 'express';
import schemas from './schemas';

const validationOrder = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schemas.validateOrderSchema.validate(req.body);

  if (error) {
    return res.status(error.details[0].type === 'any.required' ? 400 : 422)
      .json({ message: error.message.includes('does not contain 1') 
        ? '"productsIds" must include only numbers'
        : error.message });
  }
  next();
};

export default validationOrder;