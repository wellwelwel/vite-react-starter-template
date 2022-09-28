import express from 'express';
import { resolve } from 'path';

const app = express();
const port = 3000;

app.use(express.static('./dist'));
app.get('*', (req, res) => res.sendFile(resolve('./dist/index.html')));
app.listen(port, () =>
   console.log(`\n\x1b[32m➜\x1b[0m 🏠 \x1b[1mBuild:\x1b[0m \x1b[36mhttp://localhost:${port}/\x1b[0m`)
);
