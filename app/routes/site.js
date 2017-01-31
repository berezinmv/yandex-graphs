import Ember from 'ember';

export default Ember.Route.extend({
  site: Ember.inject.service(),

  model: function (params) {
    const siteId = params.site_id;
    return this.get('site').getSite(siteId);
  }
});
