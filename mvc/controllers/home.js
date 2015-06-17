module.exports = function(req, res) {
  res.send('<html><body><h1>Hello ' + req.user.name + '</h1></body></html>');
}