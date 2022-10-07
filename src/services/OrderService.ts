import { Order } from '../interfaces/Interfaces';
import connection from '../models/connection';
import OrderModel from '../models/OrderModel';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}