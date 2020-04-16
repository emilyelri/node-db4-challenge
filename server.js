const express = require('express');
const helmet = require('helmet');
const server = express();
const router = require('./data/router');

server.use(express.json());
server.use(helmet());
server.use('/api/recipes', router);

server.get('/', (req, res) => {
    res.send(`<h1>api check</h1>`)
  });

module.exports = server;