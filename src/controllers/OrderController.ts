import { Request, Response } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (req: Request, res: Response) => {
    const orders = await this.orderService.getAll();
    res.status(200).json(orders);
  };

  public registerOrder = async (req: Request, res: Response) => {
    const token = req.header('Authorization');
    const { productsIds } = req.body;
    const newOrder = await this.orderService.registerOrder(token as string, productsIds);
    res.status(201).json(newOrder);
  };
}