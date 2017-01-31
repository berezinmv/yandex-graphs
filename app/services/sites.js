import Ember from 'ember';

export default Ember.Service.extend({
  getSites: function () {
    return $.get('/sites').then(sites => sites.counters);
  }
});
