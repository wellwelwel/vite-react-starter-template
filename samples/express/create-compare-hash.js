import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcrypt'; // npm i bcrypt

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/some-pass-request', async (req, res) => {
   const plain = req.body.password;

   // Create
   const password = await bcrypt.hash(plain, 10);

   // Compare
   const match = await bcrypt.compare(plain, password);

   if (!match) res.status(403).send('Forbidden');
});

app.listen(3000);
