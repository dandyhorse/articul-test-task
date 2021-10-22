'use strict';

const express = require('express');
const { userRouter } = require('./routes');
const { serverConfig } = require('./config/config');
const app = express();

app.use('/users/', userRouter);

app.listen(serverConfig);

console.log(`App started on ${serverConfig.port}`);
