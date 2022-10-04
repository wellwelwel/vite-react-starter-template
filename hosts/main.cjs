const express = require('express');
const { json, urlencoded } = require('body-parser');
const { resolve } = require('path');

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(resolve('./dist')));
app.get('*', (req, res) => res.sendFile(resolve('./dist/index.html')));

module.exports = app;
