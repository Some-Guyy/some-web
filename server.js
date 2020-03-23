const path = require('path');
const fs = require('fs');
const util = require('util');
const express = require('express');
const app = express();
const port = 8080;

const logPath = path.join(__dirname, 'logs', 'console.log');
const canvasPath = path.join(__dirname, 'logs', 'canvas.json');
const insightsPath = path.join(__dirname, 'logs', 'insights.json');

// Save console logs.
const logFile = fs.createWriteStream(logPath, {flags: 'a'});
const logStdout = process.stdout;
console.log = log => {
  logFile.write(`${util.format(log)}\n`);
  logStdout.write(`${util.format(log)}\n`);
}

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Websocket server.
const timeStartup = new Date().toString();

// Load canvas state.
if (fs.existsSync(canvasPath)) {
  var canvasState = JSON.parse(fs.readFileSync(canvasPath));
} else {
  var canvasState = JSON.parse('[]'); // Create a new canvasState if it doesn't exist.
}

// Load website insights.
if (fs.existsSync(insightsPath)) {
  var insights = JSON.parse(fs.readFileSync(insightsPath));
} else {
  var insights = JSON.parse(`{"firstStartupTime": "${timeStartup}", "connections": 0}`); // Create a new canvasState if it doesn't exist.
}

const server = app.listen(port, _ => console.log(`Server startup success!\nTime: ${timeStartup}\nPort: ${port}\n`));
const io = require('socket.io')(server);

io.on('connection', socket => {
  insights.connections++;
  console.log(`New Connection!\nTime: ${new Date().toString()}\nIP: ${socket.handshake.headers['x-forwarded-for']}\nID: ${socket.id}\n${insights.connections} connections since ${insights.firstStartupTime}\n`);
  socket.on('requestCanvasState', _ => socket.emit('canvasState', canvasState));

  socket.on('clientDraw', data => {
    if (socket.handshake.headers['x-forwarded-for'] === undefined) {
      data.IP = 'undefined'
    } else {
      data.IP = socket.handshake.headers['x-forwarded-for'];
    }
    data.ID = socket.id;
    socket.broadcast.emit('serverDraw', data);
    canvasState.push(data);
    fs.writeFileSync(canvasPath, JSON.stringify(canvasState))
  });
});
