import express from 'express';
import ProductRoute from './routes/ProductRoute';
import UserRoute from './routes/UserRoute';
import OrderRoute from './routes/OrderRoute';

const app = express();

app.use(express.json());

app.use('/products', ProductRoute);
app.use('/users', UserRoute);
app.use('/orders', OrderRoute);

export default app;
