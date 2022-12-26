import express from 'express';
import { resolve } from 'path';
import { setTime } from 'node-and-vite-helpers';

const router = express.Router();
const root = './dist/frontend/public';

router.use(
   express.static(resolve(root), {
      etag: true,
      maxAge: setTime('24h'),
      dotfiles: 'deny',
   })
);

router.get('*', (req, res) => res.sendFile(resolve(`${root}/index.html`)));

export default router;
