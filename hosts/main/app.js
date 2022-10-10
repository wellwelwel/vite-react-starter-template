import { config as dotenv } from 'dotenv';
import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import reactApp from './routes/reactApp.js';

dotenv();

const app = express();
const secret = process.env.SESSION_SECRET;
const trustedHosts = JSON.parse(process.env.TRUSTED_HOSTS);

app.use(
   session({
      secret: secret,
      cookie: {
         httpOnly: true,
         maxAge: 1000 * 60 * 30,
      },
      resave: false,
      saveUninitialized: false,
   })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Global middleware */
app.use((req, res, next) => {
   const host = req.headers.host.split(':')[0];

   if (trustedHosts.includes(host)) next();
   else res.status(404).send('');
});

/* Routes */
app.use(reactApp);

export default app;
