import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NextFunction, Request, Response } from 'express';

dotenv.config();

const { JWT_SECRET } = process.env;

const validateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    jwt.verify(token, JWT_SECRET as Secret);

    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateJWT;