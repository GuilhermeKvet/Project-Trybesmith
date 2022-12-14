import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Order, Token } from '../interfaces/Interfaces';
import connection from '../models/connection';
import OrderModel from '../models/OrderModel';

dotenv.config();

const { JWT_SECRET } = process.env;

export default class OrderService {
  public orderModel: OrderModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.orderModel.getAll();
    return orders;
  }

  public async registerOrder(token: string, productsIds: number[]) {
    const { id } = jwt.verify(token, JWT_SECRET as Secret) as Token;
    const order = await this.orderModel.registerOrder(productsIds, id);
    return order;
  }
}