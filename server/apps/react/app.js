import express from 'express';
import { resolve } from 'path';
import limiter from '#server:configs/limiter';

const router = express.Router();

router.use(express.static(resolve('./dist')));
router.get('*', limiter.errors, (req, res) => res.sendFile(resolve('./dist/index.html'))); // 404

export default router;
