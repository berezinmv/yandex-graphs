import Ember from 'ember';

export default Ember.Route.extend({
  user: Ember.inject.service(),

  model: function () {
    return this.get('user').getUser();
  }
});
