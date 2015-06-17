var User = require('../models/user.js');

module.exports = function(req, res, next) {
  User.findByLogin(req.query.name, req.query.password, function(err, user) {
    if (err) return next(err);
    if (user) {
      req.user = user;
      next();
    } else {
      var err = new Error("Unauthorized");
      next(err);
    }
  });
}