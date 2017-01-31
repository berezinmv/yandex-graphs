import Ember from 'ember';

export default Ember.Service.extend({
  getUser: function () {
    return $.get('/user');
  }
});
