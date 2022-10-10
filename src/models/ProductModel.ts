import { Pool, ResultSetHeader } from 'mysql2/promise';
import { Product } from '../interfaces/Interfaces';

export default class ProductModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const [row] = await this.connection.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return row as Product[];
  }

  public async registerProduct(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [dataInserted] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
}