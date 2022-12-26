import express from 'express';
import limiter from '../../configs/limiter.js';
import router from './routes.js';

const app = express();

// Rate Limit
app.use((req, res, next) => {
   const { url } = req;

   /* Resources */
   if (/\.ico$/.test(url)) limiter.default(req, res, next);
   else if (/\.(css|json|js)$/.test(url)) limiter.small(req, res, next);
   else if (/assets/.test(url)) limiter.images(req, res, next);
   // Default
   else limiter.default(req, res, next);
});

// Routes
app.use(router);

export default app;
