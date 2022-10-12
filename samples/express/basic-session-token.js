import express from 'express';
import session from 'express-session';
import tokenGenerate from '../../helpers/tokenGenerate';
import bodyParser from 'body-parser';
import xss from '../../helpers/xss';
import setTime from '../../helpers/setTime';

const app = express();

app.use(
   session({
      secret: '*',
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
      req.session.token = tokenGenerate();
      next();
   }
});

app.post('/api/do-something', (req, res) => {
   if (xss(req.body.token) !== req.session.token) res.status(403).send('Forbidden');
   else res.json(true);
});

app.listen(3000);