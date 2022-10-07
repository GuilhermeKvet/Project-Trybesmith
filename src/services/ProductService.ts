import Product from '../interfaces/ProductInterface';
import connection from '../models/connection';
import ProductModel from '../models/ProductModel';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async registerProduct(product: Product): Promise<Product> {
    const productCreated = await this.model.registerProduct(product);
    return productCreated;
  }
}