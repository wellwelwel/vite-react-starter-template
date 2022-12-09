import express from 'express';
import setTime from '#helpers/setTime';

const router = express.Router();

// Middleware
router.get('/api/*', (req, res, next) => {
   req.session.expires = new Date(Date.now() + setTime('30m'));
   next();
});

router.get('/api/test', (req, res) => res.send('<div class="test-re">Hi Curious 🤡</div>'));

export default router;
