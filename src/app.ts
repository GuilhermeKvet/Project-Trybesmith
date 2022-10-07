import express from 'express';
import ProductRoute from './routes/ProductRoute';

const app = express();

app.use(express.json());

app.use('/products', ProductRoute);

export default app;
