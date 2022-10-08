const express = require('express');
const { json, urlencoded } = require('body-parser');
const { resolve } = require('path');
const router = require('./router');

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(express.static(resolve('./dist')));
app.use(router);

module.exports = app;
