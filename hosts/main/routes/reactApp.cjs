const express = require('express');
const { resolve } = require('path');

const router = express.Router();

router.use(express.static(resolve('./dist')));
router.get('*', (req, res) => res.sendFile(resolve('./dist/index.html')));

module.exports = router;
