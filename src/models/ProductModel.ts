import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/ProductInterface';

export default class ProductModel {
  public connecttion: Pool;

  constructor(connection: Pool) {
    this.connecttion = connection;
  }

  public async getAll(): Promise<Product[]> {
    const [row] = await this.connecttion.execute(
      'SELECT * FROM Trybesmith.Products',
    );
    return row as Product[];
  }

  public async registerProduct(product: Product): Promise<Product> {
    const { name, amount } = product;
    const [dataInserted] = await this.connecttion.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
}