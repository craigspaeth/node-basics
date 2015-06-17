var express = require('express');
var app = express();
var _ = require('underscore');

// "Database"
var db = [
  { name: 'Ian', password: 'foo' },
  { name: 'Craig', password: 'bar' }
]

// "Log in" Middleware
app.use(function(req, res, next) {
  var user = _.findWhere(db, { name: req.query.name, password: req.query.password });
  if (user) {
    req.user = user;
    next();
  } else {
    var err = new Error("Unauthorized");
    next(err);
  }
});

// Route handler
app.get('/', function(req, res) {
  res.send('<html><body><h1>Hello ' + req.user.name + '</h1></body></html>');
});

// Error handler
app.use(function(err, req, res, next) {
  res.send('ERROR ' + err.message);
});

// Start server
app.listen(1337, function() {
  console.log('listening');
});
