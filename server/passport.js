var passport = require('passport');
var YandexStrategy = require('passport-yandex').Strategy;
var yandexConfig = require('../yandex-config.json');

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

// configure yandex strategy for passport
passport.use(new YandexStrategy({
    clientID: yandexConfig.clientId ,
    clientSecret: yandexConfig.clientSecret,
    callbackUrl: "http://127.0.0.1:4200/auth/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    var user = {
      name: profile._json.login,
      token: accessToken
    };
    done(null, user);
  }
));

module.exports = function (app) {
  // Initialize passport
  app.use(passport.initialize());
  app.use(passport.session());
};
