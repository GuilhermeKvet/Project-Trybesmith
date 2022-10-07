import express, { Request, Response, NextFunction } from 'express';
import ProductRoute from './routes/ProductRoute';
import UserRoute from './routes/UserRoute';
import OrderRoute from './routes/OrderRoute';
import LoginRoute from './routes/LoginRoute';
import HttpException from './middlewares/error';

const app = express();

app.use(express.json());

app.use('/products', ProductRoute);
app.use('/users', UserRoute);
app.use('/orders', OrderRoute);
app.use('/login', LoginRoute);
app.use((err: HttpException, _req: Request, res: Response, _next: NextFunction) => {
  res.status(err.statusCode || 500).json({ message: err.message });
});

export default app;
