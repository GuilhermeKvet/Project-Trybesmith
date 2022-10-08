import { Router } from 'express';
import OrderController from '../controllers/OrderController';
import validateJWT from '../middlewares/auth';
import validationOrder from '../middlewares/OrderValidationInputs';

const orderController = new OrderController();

const router = Router();

router.get('/', orderController.getAll);
router.post('/', validateJWT, validationOrder, orderController.registerOrder);

export default router;