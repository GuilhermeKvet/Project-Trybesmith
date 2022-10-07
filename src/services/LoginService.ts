import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../interfaces/Interfaces';
import connection from '../models/connection';
import LoginModel from '../models/LoginModel';
import HttpException from '../middlewares/error';

dotenv.config();

const { JWT_SECRET } = process.env;

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public async login(username: string, password: string): Promise<string> {
    const hasUser = await this.model.login(username, password);
    if (!hasUser) {
      throw new HttpException(401, 'Username or password invalid');
    }
    const token = this.generateToken(hasUser);
    return token;
  }

  private generateToken = (newUser: User) => {
    const payload = { id: newUser.id, username: newUser.username };
    return jwt.sign(payload, JWT_SECRET as Secret);
  };
}