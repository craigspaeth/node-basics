var express = require('express');
var app = express();
var _ = require('underscore');
var auth = require('./controllers/auth');
var home = require('./controllers/home');
var error = require('./controllers/error');

app.use(auth);
app.get('/', home);
app.use(error);

// Start server
app.listen(1337, function() {
  console.log('listening');
});
