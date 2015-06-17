var express = require('express');
var app = express();
var _ = require('underscore');

// "Database"
var db = [
  { name: 'Ian', password: 'foo' },
  { name: 'Craig', password: 'bar' }
]

// Export app
module.exports = app;

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