let request = require('request');

function getRequestUrlForSites(token) {
  return `https://api-metrika.yandex.ru/management/v1/counters?oauth_token=${token}`;
}


function getRequestUrlForSite(token, siteId) {
  return `https://api-metrika.yandex.ru/management/v1/counter/${siteId}?oauth_token=${token}&fields=name`;
}

module.exports.getSites = function (token) {
  return new Promise(function (resolve, reject) {
    request(getRequestUrlForSites(token), function (err, response, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    })
  })
}

module.exports.getSite = function (token, siteId) {
  return new Promise(function (resolve, reject) {
    request(getRequestUrlForSite(token, siteId), function (err, response, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  });
};
