/*jshint node:true*/

var passport = require('passport');

module.exports = function (app) {
  // Set auth routes
  app.get('/authenticate', passport.authenticate('yandex'));
  app.get('/auth/callback', passport.authenticate('yandex'), function (req, res) {
    res.redirect('/');
  });
  app.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
  })
};
