var _ = require('underscore');

// "Database"
var db = [
  { name: 'Ian', password: 'foo' },
  { name: 'Craig', password: 'bar' }
]

var User = function(attrs) {
  _.extend(this, attrs);
}

User.prototype.sayHi = function() {
  console.log(this.name)
}

User.findByLogin = function(name, password, callback) {
  // "reading" the database
  setTimeout(function() {
    var data = _.findWhere(db, { name: name, password: password });
    callback(null, new User(data));
  });
}

module.exports = User;