import { Router } from 'express';
import ProductController from '../controllers/ProductController';
import validationProduct from '../middlewares/ProductValidationInputs';

const router = Router();

const productController = new ProductController();

router.get('/', productController.getAll);
router.post('/', validationProduct, productController.registerProduct);

export default router;