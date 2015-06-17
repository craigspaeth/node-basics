module.exports = function(err, req, res, next) {
  res.send('ERROR ' + err.message);
}