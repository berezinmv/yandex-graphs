import Ember from 'ember';

export default Ember.Service.extend({
  getSite: function (siteId) {
    return $.post('/site', {siteId: siteId}).then(site => JSON.parse(site).counter);
  }
});
