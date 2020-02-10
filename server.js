const express = require('express');
const path = require('path');
const app = express();
const server = require("http").Server(app);
const port = 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.listen(port, _ => console.log(`Some website listening on port ${port}!`));
