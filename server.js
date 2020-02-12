const path = require('path');
const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Websocket server stuff
const server = app.listen(port, _ => console.log(`Some website listening on port ${port}!\n`));
const io = require('socket.io')(server);

io.on('connection', socket => {
  console.log(`New Connection!\nID: ${socket.id}\nIP: ${socket.handshake.address}\n`);
  socket.on('requestCanvasState', _ => socket.emit('canvasState', canvasState));

  socket.on('clientDraw', data => {
    socket.broadcast.emit('serverDraw', data);
    canvasState.push({
      drawX: data.drawX,
      drawY: data.drawY,
      brushSize: data.brushSize
    });
  });
});

// Canvas state starts blank
const canvasState = [];
