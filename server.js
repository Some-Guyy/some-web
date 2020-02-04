const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/sota', function(req, res) {
  res.sendFile(__dirname + '../sota-web/build/index.html');
});

app.listen(port, () => console.log(`Some website listening on port ${port}!`));