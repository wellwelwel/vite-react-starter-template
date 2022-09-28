const express = require('express');
const { resolve } = require('path');

const app = express();

app.use(express.static(resolve('./dist')));
app.get('*', (req, res) => res.sendFile(resolve('./dist/index.html')));

module.exports = app;
