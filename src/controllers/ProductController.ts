import { Request, Response } from 'express';
import ProductService from '../services/ProductService';

export default class ProductController {
  constructor(private productService = new ProductService()) { }

  public registerProduct = async (req: Request, res: Response) => {
    const product = req.body;
    const productCreated = await this.productService.registerProduct(product);
    res.status(201).json(productCreated);
  };
}