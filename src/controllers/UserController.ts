import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
  constructor(private userService = new UserService()) {}

  public registerUser = async (req: Request, res: Response) => {
    const user = req.body;
    const token = await this.userService.registerUser(user);
    res.status(201).json({ token });
  };
}