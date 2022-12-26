import 'dotenv/config';
import express from 'express';
import compression from 'compression';
import { setTime } from 'node-and-vite-helpers';
import session from 'express-session';
// import connectRedis from 'connect-redis';
// import redisClient from './configs/redis';
// import mysql from './configs/mysql';
import cors from 'cors';
import bodyParser from 'body-parser';

// Routes
import api from './apps/api/app.js';
import react from './apps/react/app.js';

(() => {
   const server = express();
   const port = process.env?.PORT || 3000;
   const secret = process.env?.SESSION_SECRET || '';
   const trustedDomains = [`http://localhost:${port}`, `http://localhost:5173`];
   // const RedisStore = connectRedis(session);

   server.set('trust proxy', 1);

   server.use(compression());

   server.use(
      session({
         secret: secret,
         cookie: {
            httpOnly: true,
            maxAge: setTime('30m'),
            // secure: true,
         },
         // store: new RedisStore({ client: redisClient }),
         resave: false,
         saveUninitialized: true,
      })
   );

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
