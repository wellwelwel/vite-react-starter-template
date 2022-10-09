require('dotenv').config();

const express = require('express');
const session = require('express-session');
const { json, urlencoded } = require('body-parser');
const reactApp = require('./routes/reactApp.cjs');

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

/* Global middleware */
app.use((req, res, next) => {
   const host = req.headers.host.split(':')[0];

   if (trustedHosts.includes(host)) next();
   else res.status(404).send('');
});

/* Routes */
app.use(reactApp);

module.exports = app;
