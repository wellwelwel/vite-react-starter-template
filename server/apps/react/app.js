import express from 'express';
// import helmet from 'helmet';
import limiter from '#server:configs/limiter';
import router from './routes.js';

const app = express();

// Security
// app.use(
//    helmet.contentSecurityPolicy({
//       useDefaults: true,
//       directives: {
//          // Fixing Vite bug in Production using React Strict Mode 😒
//          'script-src': ["'self'", "'unsafe-inline'"],
//       },
//    })
// );

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
