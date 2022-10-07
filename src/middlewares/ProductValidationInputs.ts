import { NextFunction, Request, Response } from 'express';
import schemas from './schemas';

const validationProduct = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schemas.validateProductSchema.validate(req.body);

  if (error?.message.includes('must be a string') || error?.message.includes('characters long')) {
    return res.status(422).json({ message: error.message });
  }

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

export default validationProduct;