import express from 'express';
import { resolve } from 'path';
import { setTime } from 'node-and-vite-helpers';

const router = express.Router();

router.use(
   express.static(resolve('./dist'), {
      etag: true,
      maxAge: setTime('24h'),
      dotfiles: 'deny',
   })
);

router.get('*', (req, res) => res.sendFile(resolve('./dist/index.html')));

export default router;
