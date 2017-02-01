let request = require('request');

/**
 * Get request url to load sites
 * @param token
 * @returns {string}
 */
function getRequestUrlForSites(token) {
  return `https://api-metrika.yandex.ru/management/v1/counters?oauth_token=${token}`;
}

/**
 * Get request url to load information about specific site
 * @param token
 * @param siteId
 * @returns {string}
 */
function getRequestUrlForSite(token, siteId) {
  return `https://api-metrika.yandex.ru/management/v1/counter/${siteId}?oauth_token=${token}`;
}

/**
 * Load data
 * @param token
 * @param requestParameters
 * @returns {string}
 */
function getRequestUrlForData(token, requestParameters) {
  let requestUrl = 'https://api-metrika.yandex.ru/stat/v1/data/bytime';
  requestUrl = `${requestUrl}?oauth_token=${token}`;
  let parameterKeys = Object.keys(requestParameters);
  if (parameterKeys.length) {
    let parametersString = parameterKeys
      .map(key => `${key}=${requestParameters[key]}`)
      .join('&');
    requestUrl = `${requestUrl}&${parametersString}`;
  }
  return requestUrl;
}

/**
 * Send HTTP request
 * @param requestUrl
 * @returns {Promise}
 */
function sendRequest(requestUrl) {
  return new Promise(function (resolve, reject) {
    request(requestUrl, function (err, response, body) {
      if (err) {
        reject(err);
      } else {
        resolve(body);
      }
    });
  })
}

module.exports.getSites = function (token) {
  return sendRequest(getRequestUrlForSites(token));
};

module.exports.getSite = function (token, siteId) {
  return sendRequest(getRequestUrlForSite(token, siteId));
};

module.exports.getData = function (token, requestParameters) {
  return sendRequest(getRequestUrlForData(token, requestParameters));
}
