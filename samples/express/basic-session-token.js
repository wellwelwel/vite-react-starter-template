import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import { tokenGenerate, xss, setTime } from 'node-and-vite-helpers';

const app = express();

app.use(
   session({
      secret: tokenGenerate(64),
      cookie: {
         httpOnly: true,
         maxAge: setTime('30m'),
      },
      resave: false,
      saveUninitialized: false,
   })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/some-form-page/', (req, res, next) => {
   if (req?.session?.token) next();
   else {
      req.session.token = tokenGenerate(/* Default: 32 */);
      next();
   }
});

app.post('/api/do-something', (req, res) => {
   if (xss(req.body.token) !== req.session.token) res.status(403).send('Forbidden');
   else res.json(true);
});

app.listen(3000);
