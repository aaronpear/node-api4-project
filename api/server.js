const express = require('express');
const server = express();
const userRouter = require('./users/users-router.js');

server.use(express.json());
server.use('/api', userRouter);

module.exports = server;
