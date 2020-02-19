const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const port = 8080;

const canvasPath = path.join(__dirname, 'logs', 'canvas.json');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Websocket server stuff.
const server = app.listen(port, _ => console.log(`Some website listening on port ${port}!\n`));
const io = require('socket.io')(server);

io.on('connection', socket => {
  const logConnect = `New Connection!\nTime: ${new Date().toString()}\nID: ${socket.id}\nIP: ${socket.handshake.headers['x-forwarded-for']}\n`;
  console.log(logConnect);
  socket.on('requestCanvasState', _ => socket.emit('canvasState', canvasState));

  socket.on('clientDraw', data => {
    data.ID = socket.id;
    if (socket.handshake.headers['x-forwarded-for'] === undefined) {
      data.IP = 'undefined'
    } else {
      data.IP = socket.handshake.headers['x-forwarded-for'];
    }
    socket.broadcast.emit('serverDraw', data);
    canvasState.push(data);
  });
});

// Load canvas state.
if (fs.existsSync(canvasPath)) {
  var canvasState = JSON.parse(fs.readFileSync(canvasPath));
} else {
  var canvasState = JSON.parse('[]'); // Create a new canvasState if it doesn't exist.
}

// Save canvas state
setInterval(_ => fs.writeFileSync(canvasPath, JSON.stringify(canvasState)), 1000);
