import express from 'express';
import { resolve } from 'path';

const main = express();

main.use(express.static(resolve('./dist')));
main.get('*', (req, res) => res.sendFile(resolve('./dist/index.html')));

export default main;
