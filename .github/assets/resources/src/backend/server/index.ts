import 'dotenv/config';
import express from 'express';
import compression from 'compression';
import { setTime } from 'node-and-vite-helpers';
import helmet from 'helmet';
import session from 'express-session';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectRedis from 'connect-redis';
import redisClient from './configs/redis.js';
import mysql from './configs/mysql.js';

// Routes
import api from './apps/api/app.js';
import react from './apps/react/app.js';

(async () => {
   const server = express();
   const port = process.env?.PORT || 3000;
   const secret = process.env?.SESSION_SECRET || '';
   const trustedDomains = [`http://localhost:${port}`, `http://localhost:5173`];
   const isProduction = process.env.NODE_ENV === 'production';
   const RedisStore = connectRedis(session);
   // Security
   server.set('trust proxy', 1);

   server.use(helmet());
   server.use(
      helmet.contentSecurityPolicy({
         directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            connectSrc: ["'self'"],
            styleSrc: ["'self'", 'fonts.googleapis.com'],
            imgSrc: ["'self'", 'data:'],
         },
      })
   );

   server.use(compression());

   server.use(
      session({
         secret: secret,
         cookie: {
            httpOnly: true,
            maxAge: setTime('30m'),
            // secure: true,
         },
         store: new RedisStore({ client: redisClient }),
         resave: false,
         saveUninitialized: true,
      })
   );

   server.use(cors({ origin: trustedDomains, credentials: true }));

   // Request parser
   server.use(bodyParser.json());
   server.use(bodyParser.urlencoded({ extended: true }));

   !isProduction && (mysql.verbose = true);

   // Apps
   server.use(api);
   server.use(react);

   server.listen(port, () => {
      console.log(
         [
            `\n`,
            `  \x1b[1m🚀  Listening\x1b[0m in:`,
            `\n\n`,
            `    ➜ \x1b[34mhttp://localhost:${port}/\x1b[0m`,
            `\n`,
         ].join('')
      );
   });
})();
