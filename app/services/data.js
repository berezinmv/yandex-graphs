import Ember from 'ember';

export default Ember.Service.extend({
  getData: function (requestParameters) {
    return $.post('/data', requestParameters);
  }
});
