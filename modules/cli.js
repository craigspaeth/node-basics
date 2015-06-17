//
// Command line tool that humanizes strings. Run with `node cli.js hi-my-name-is`
//

var humanize = require('./humanize');

console.log(humanize(process.argv[2]));