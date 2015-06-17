var express = require('express');
var app = express();
var _ = require('underscore');

// Export app
module.exports = app;

// Route handler
app.get('/', function(req, res) {
  res.send('<html><body><h1>Hello ' + req.user.name + '</h1></body></html>');
});
