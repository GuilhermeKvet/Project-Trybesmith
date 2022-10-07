import express from 'express';
import ProductRoute from './routes/ProductRoute';
import UserRoute from './routes/UserRoute';

const app = express();

app.use(express.json());

app.use('/products', ProductRoute);
app.use('/users', UserRoute);

export default app;
