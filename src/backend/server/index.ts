import 'dotenv/config';
import express from 'express';
import compression from 'compression';
import { setTime } from 'node-and-vite-helpers';
import helmet from 'helmet';
import session from 'express-session';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectRedis from 'connect-redis';

// Routes
import api from './apps/api/app.js';
import react from './apps/react/app.js';

(async () => {
   const server = express();
   const port = process.env?.PORT || 3000;
   const secret = process.env?.SESSION_SECRET || '';
   const trustedDomains = [`http://localhost:${port}`, `http://localhost:5173`];
   const isStackBlitz = /gkypjp/.test(process.cwd());
   const isProduction = process.env.NODE_ENV === 'production';

   // Security
   server.set('trust proxy', 1);

   if (!isStackBlitz) {
      const redisClient = (await import('./configs/redis.js')).default;
      const mysql = (await import('./configs/mysql.js')).default;

      const RedisStore = connectRedis(session);

      server.use(helmet());
      server.use(
         helmet.contentSecurityPolicy({
            directives: {
               defaultSrc: ["'self'"],
               scriptSrc: ["'self'", "'unsafe-inline'"],
               connectSrc: ["'self'", 'jsonplaceholder.typicode.com'],
               styleSrc: ["'self'", 'fonts.googleapis.com'],
               imgSrc: ["'self'"],
            },
         })
      );

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

      !isProduction && (mysql.verbose = true);

      console.log(
         await mysql.select({
            table: 'pokemons',
         })
      );
   } else {
      server.use(
         session({
            secret: secret,
            cookie: {
               httpOnly: true,
               maxAge: setTime('30m'),
               secure: true,
            },
            resave: false,
            saveUninitialized: true,
         })
      );
   }

   server.use(compression());

   server.use(cors({ origin: trustedDomains, credentials: true }));

   // Request parser
   server.use(bodyParser.json());
   server.use(bodyParser.urlencoded({ extended: true }));

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
