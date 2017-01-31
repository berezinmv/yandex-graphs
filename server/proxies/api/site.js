let getSite = require('../../yandex-api').getSite;

module.exports = function (app) {
  app.post('/site', (req, res) => {
    let siteId = req.body.siteId;
    let user = req.user;
    getSite(user.token, siteId).then(site => res.send(site));
  });
};
