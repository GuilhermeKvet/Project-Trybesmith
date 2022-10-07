import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const orderController = new OrderController();

const router = Router();

router.get('/', orderController.getAll);

export default router;