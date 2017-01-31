let getSites = require('../../yandex-api').getSites;

module.exports = function (app) {
  app.get('/sites', function (req, res) {
    let user = req.user;
    if (!user) {
      res.send([]);
    } else {
      getSites(user.token).then(function (sites) {
        res.send(sites);
      });
    }
  });
};
