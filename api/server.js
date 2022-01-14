const express = require('express');
const server = express();
const userRouter = require('./users/users-router.js');

server.use(express.json());
server.use('/api', userRouter);

server.get('/', (req, res) => {
    res.send(`
    <h1>Node Module Project 4</h1>
    `)
})

module.exports = server;
