import { NextFunction, Request, Response } from 'express';
import schemas from './schemas';

const validationUser = (req: Request, res: Response, next: NextFunction) => {
  const { error } = schemas.validateUserSchema.validate(req.body);

  if (error?.message.includes('must be')) {
    return res.status(422).json({ message: error.message });
  }

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

export default validationUser;