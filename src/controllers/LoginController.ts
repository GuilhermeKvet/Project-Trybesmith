import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

export default class LoginController {
  constructor(private loginService = new LoginService()) { }

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const token = await this.loginService.login(username, password);
    res.status(200).json({ token });
  };
}