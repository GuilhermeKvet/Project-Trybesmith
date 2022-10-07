import { Router } from 'express';
import UserController from '../controllers/UserController';
import validationUser from '../middlewares/UserValidationInputs';

const router = Router();

const userController = new UserController();

router.post('/', validationUser, userController.registerUser);

export default router;