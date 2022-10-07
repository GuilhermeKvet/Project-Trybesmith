import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../interfaces/Interfaces';
import connection from '../models/connection';
import UserModel from '../models/UserModel';

dotenv.config();

const { JWT_SECRET } = process.env;

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async registerUser(user: User): Promise<string> {
    const newUser = await this.model.registerUser(user);
    const token = this.generateToken(newUser);
    return token;
  }
  
  private generateToken = (newUser: User) => {
    const payload = { id: newUser.id, username: newUser.username };
    return jwt.sign(payload, JWT_SECRET as Secret);
  };
}