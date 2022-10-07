import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import validationLogin from '../middlewares/loginValidateInputs';

const router = Router();

const loginController = new LoginController();

router.post('/', validationLogin, loginController.login);

export default router;