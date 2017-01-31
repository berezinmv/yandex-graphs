let request = require('request');

function getRequestUrlForSites(token) {
  return `https://api-metrika.yandex.ru/management/v1/counters?oauth_token=${token}`;
}

module.exports.getSites = function (token) {
  return new Promise(function (resolve, reject) {
    request(getRequestUrlForSites(token), function (err, response, body) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(body));
      }
    })
  })
}
