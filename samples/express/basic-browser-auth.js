import express from 'express';
import basicAuth from 'express-basic-auth'; // npm i express-basic-auth

const app = express();

app.use(
   '/private-page',
   basicAuth({
      users: { ['user']: 'pass' },
      challenge: true,
   })
);

app.get('/private-page', (req, res) => res.send('Hello!'));

app.listen(3000);
