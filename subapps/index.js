var express = require('express');
var app = express();
var _ = require('underscore');
var auth = require('./auth');
var home = require('./home');

app.use(auth);
app.use(home);

// Error handler
app.use(function(err, req, res, next) {
  res.send('ERROR ' + err.message);
});

// Start server
app.listen(1337, function() {
  console.log('listening');
});
