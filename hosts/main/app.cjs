require('dotenv').config();

const { resolve } = require('path');
const express = require('express');
const session = require('express-session');
const { json, urlencoded } = require('body-parser');
const router = require('./router.cjs');

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

app.use(json());
app.use(urlencoded({ extended: true }));

app.use((req, res, next) => {
   if (req?.session?.views) req.session.views++;
   else req.session.views = 1;

   console.log(req.session.views);

   if (trustedHosts.includes(req.headers.host.split(':').shift())) next();
   else res.status(404).send('');
});

/* React App */
app.use(express.static(resolve('./dist')));
app.use(router);

module.exports = app;
