let getData = require('../../yandex-api').getData;

module.exports = function (app) {
  app.post('/data', (req, res) => {
    let user = req.user;
    if (user) {
      const token = user.token;
      let params = req.body.params;
      getData(token, params).then(data => res.send(data));
    }
  });
};
