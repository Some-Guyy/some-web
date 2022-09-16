const path = require('path');
const fs = require('fs');
const util = require('util');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// If log directory does not exist, create one.
if (!fs.existsSync('./logs')){
    fs.mkdirSync('./logs');
}

// Paths
const logPath = path.join(__dirname, 'logs', 'console.log');

// Save console logs.
const logFile = fs.createWriteStream(logPath, {flags: 'a'});
const logStdout = process.stdout;
console.log = log => {
  logFile.write(`${util.format(log)}\n`);
  logStdout.write(`${util.format(log)}\n`);
}

const convertDateToString = date => {
    date_string = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return date_string;
}

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

startupDate = new Date()
app.listen(PORT, () => console.log(`${convertDateToString(startupDate)} - [INFO] - Server startup! Running on port ${PORT}.`));
