import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import limiter from '../../configs/limiter.js';
import router from './routes.js';

const app = express();

// Security
app.use(helmet());

// Rate Limit
app.use(limiter.default);

// Routes
app.use(router);

export default app;
