const express = require('express');
const { resolve } = require('path');

const router = express.Router();

router.use((req, res, next) => {
   console.log('Time: ', Date.now());
   next();
});

router.get('*', (req, res) => res.sendFile(resolve('./dist/index.html')));

module.exports = router;
