import Ember from 'ember';

export default Ember.Component.extend({
  sites: Ember.inject.service(),
  siteList: [],

  init: function () {
    this._super(...arguments);
    this.get('sites').getSites().then(sites => {
      console.log(sites);
      this.set('siteList', sites);
    });
  }
});
