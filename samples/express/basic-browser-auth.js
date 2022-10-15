import express from 'express';
import basicAuth from 'basic-auth'; // npm i basic-auth

const app = express();

app.use('/private-page', (req, res, next) => {
   res.setHeader('WWW-Authenticate', 'Basic realm="Node"'); // Prompt user and password

   const credentials = basicAuth(req);

   if (!credentials || credentials?.name !== 'user' || credentials?.pass !== 'pass') {
      res.status(401);
      res.send('Unauthorized');
   } else next();
});

app.get('/private-page', (req, res) => res.send('Hello!'));

app.listen(3000);
