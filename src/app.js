const path = require('path')
const express = require('express');

const routers = require('./routers');

const app = express();
app.use(express.json());
app.use(express.static(path.resolve('public')));

app.use('/api', routers);

module.exports = app;