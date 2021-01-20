/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const favicon = require('serve-favicon');
const path = require('path');
const { NODE_ENV } = require('./config');

const app = express();

app.disable('etag');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(morgan('dev'));

app.use((error, req, res) => {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: 'Server error' };
  } else {
    console.error(error);
    response = { error: error.message, object: error };
  }
  res.status(500).json(response);
});

module.exports = app;
