import express from 'express';
import { resolve } from 'path';

const router = express.Router();

router.use(express.static(resolve('./dist')));
router.get('*', (req, res) => res.sendFile(resolve('./dist/index.html')));

export default router;
