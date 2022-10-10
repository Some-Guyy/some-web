const path = require('path');
const fs = require('fs');
const util = require('util');
const express = require('express');
const { Server } = require('socket.io');

const app = express();
const PORT = process.env.PORT || 3000;

// If appdata directory does not exist, create one.
if (!fs.existsSync('./appdata')){
    fs.mkdirSync('./appdata');
}

// Paths
const logPath = path.join(__dirname, 'appdata', 'console.log');
const insightsPath = path.join(__dirname, 'appdata', 'insights.json');
const graffitiPath = path.join(__dirname, 'appdata', 'graffiti.json');

// Save console logs.
const logFile = fs.createWriteStream(logPath, {flags: 'a'});
const logStdout = process.stdout;
console.log = log => {
  logFile.write(`${util.format(log)}\n`);
  logStdout.write(`${util.format(log)}\n`);
}

// Function to return a prettier date string format of "YYYY-MM-DD HH:MM:SS" from a date object. Mainly used for logging.
const convertDateToString = date => {
    date_string = `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;
    return date_string;
}

// Files to serve to client.
app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

// Load insights.
if (fs.existsSync(insightsPath)) {
    var insights = JSON.parse(fs.readFileSync(insightsPath));
} else {
    var insights = JSON.parse('{"startups": []}'); // Create new insights if it doesn't exist.
}

// Load graffiti.
if (fs.existsSync(graffitiPath)) {
    var graffiti = JSON.parse(fs.readFileSync(graffitiPath));
} else {
    var graffiti = JSON.parse('[]'); // Create new graffiti if it doesn't exist.
}

// Startup of server.
startupDate = new Date();
startupDateString = convertDateToString(startupDate);
insights.startups.push({startupDate: startupDateString, connections: 0}); // Push new startup object into insights.
fs.writeFileSync(insightsPath, JSON.stringify(insights)); // Update insights.json
const server = app.listen(PORT, () => console.log(`${startupDateString} - [INFO] - Server startup! Running on port ${PORT}.`));

// Websocket stuff.
const io = new Server(server);

io.on('connection', socket => {
    timestamp = new Date();
    insights.startups[insights.startups.length - 1].connections++;
    fs.writeFileSync(insightsPath, JSON.stringify(insights));
    console.log(`${convertDateToString(timestamp)} - [INFO] - New connection!\nIP: ${socket.handshake.headers['x-forwarded-for']}\nID: ${socket.id}\n${insights.startups[insights.startups.length - 1].connections} connections since ${insights.startups[insights.startups.length - 1].startupDate}`);

    socket.on('requestGraffiti', () => socket.emit('sendGraffiti', graffiti));

    socket.on('clientDraw', data => {
        if (socket.handshake.headers['x-forwarded-for'] === undefined) {
            data.IP = 'undefined'
          } else {
            data.IP = socket.handshake.headers['x-forwarded-for'];
          }
          data.ID = socket.id;
          socket.broadcast.emit('serverDraw', data);
          graffiti.push(data);
          fs.writeFileSync(graffitiPath, JSON.stringify(graffiti));
    });
});
