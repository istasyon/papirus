// Catches uncaught exceptions and prevents app crashes
process.on('uncaughtException', err => {
  console.error(err.stack || err);
});

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const helmet = require('helmet');

const keys = require('./config/keys');
const app = express();

const routes = require('./routes');

// DB Setup
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);
const db = mongoose.connection;
db.on('error', err => {
  console.error('Error', err);
  process.exit(1);
});
db.once('open', () => {
  console.log('Connected to MongoDB server.');
});

// HTTP request logger with Standard Apache combined log output
app.use(morgan('combined'));

app.use(bodyParser.json());

// Helmet is a collection of 11 smaller middleware functions
// that set HTTP headers to secure Express apps
app.use(helmet());

// Express will serve up production assets
// like our main.js file, or main.css file!
app.use(express.static('client/build'));

app.use('/api', routes);
// Express will serve up the index.html file
// if it doesn't recognize the route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

module.exports = app;
