var _ = require('underscore');

// "Database"
var db = [
  { name: 'Ian', password: 'foo' },
  { name: 'Craig', password: 'bar' }
]

var User = function(attrs) {
  _.extend(this, attrs);
}

User.findByLogin = function(name, password, callback) {
  // "reading" the database
  setTimeout(function() {
    var user = _.findWhere(db, { name: name, password: password });
    callback(null, user);
  });
}

module.exports = User;