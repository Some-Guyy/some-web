const path = require('path');
const fs = require('fs');
const util = require('util');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// If appdata directory does not exist, create one.
if (!fs.existsSync('./appdata')){
    fs.mkdirSync('./appdata');
}

// Paths
const logPath = path.join(__dirname, 'appdata', 'console.log');

// Save console logs.
const logFile = fs.createWriteStream(logPath, {flags: 'a'});
const logStdout = process.stdout;
console.log = log => {
  logFile.write(`${util.format(log)}\n`);
  logStdout.write(`${util.format(log)}\n`);
}

// Function to return a prettier date string format of "YYYY-MM-DD HH:MM:SS" from a date object. Mainly used for logging.
const convertDateToString = date => {
    date_string = `${date.getFullYear()}-${('0' + date.getMonth()).slice(-2)}-${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;
    return date_string;
}

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

startupDate = new Date();
app.listen(PORT, () => console.log(`${convertDateToString(startupDate)} - [INFO] - Server startup! Running on port ${PORT}.`));
