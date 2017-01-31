module.exports = function (app) {
  app.get('/user', function (req, res) {
    var user = req.user;
    if (user) {
      res.send({name: user.name});
    } else {
      res.send(null);
    }
  });
};
