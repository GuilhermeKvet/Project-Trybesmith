import { Pool, ResultSetHeader } from 'mysql2/promise';
import { InsertOrder, Order } from '../interfaces/Interfaces';

export default class OrderModel {
  public connection: Pool;

  constructor(conn: Pool) {
    this.connection = conn;
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

  public async registerOrder(productsIds: number[], userId: number): Promise<InsertOrder> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    
    await Promise.all(productsIds
      .map((productId) => this.connection.execute<ResultSetHeader>(
        'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
        [insertId, productId],
      )));

    return { userId, productsIds };
  }
}