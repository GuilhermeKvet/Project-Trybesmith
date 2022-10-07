import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces/Interfaces';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [row] = await this.connection.execute(
      `SELECT o.id, o.userId, JSON_ARRAYAGG(pr.id) AS productsIds
      FROM Trybesmith.Orders AS o
      INNER JOIN Trybesmith.Products AS pr
      ON o.id = pr.orderId
      GROUP BY o.id`,
    );
    return row as Order[];
  }
}