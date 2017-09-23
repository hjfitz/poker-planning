// main deps
const express = require('express');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');

// local imports
const logger = require('./logger');

// init logger
const sockLog = logger('[SOCKET]');
const servLog = logger('[SERVER]');
// use a http server to wrap express and our websocket
const app = express();
const server = http.createServer(app);
const wsServer = new WebSocket.Server({ server });
// default port = 5000
const PORT = process.env.PORT || 5000;

// important files
const pub = path.join(__dirname, '/build/public');
const index = path.join(pub, '/index.html');

/**
 * EXPRESS CONFIGURATION
 */
// serve public files
app.use('/public', [express.static(pub)]);

// every time the server gets hit, log it nicely.
app.use('/', (req, res, next) => {
  const { method, url } = req;
  servLog(`${new Date()} :: ${method} ${url}`);
  next();
});

// this middleware must come after everything
// allows client side router to handle pages
app.get('*', (req, res) => {
  res.sendFile(index);
});

/**
 * SOCKET CONFIGURATION
 */
wsServer.on('connection', ws => {
  sockLog('New client connected');
  ws.on('message', inc => {
    const [type, message] = inc.split('|');
    type === 'PING' ? ws.send('PONG') : handleMessage(message);
  });
});

const handleMessage = msg => {
  sockLog(msg);
}

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
