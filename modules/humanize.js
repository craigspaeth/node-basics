//
// Module that humanizes a string
//
var _ = require('underscore.string');

// Export the main function
module.exports = function(str) {
  var s = str;
  s.split('').forEach(function() {});
  // ...
  // Cheat :D
  return _.humanize(str);
}
