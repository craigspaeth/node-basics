var humanize = require('./humanize');

describe('humanize', function () {

  it('humanizes string', function() {
    humanize('hi-there-my-name-is-bot').should.equal('Hi there my name is bot');
  });
});