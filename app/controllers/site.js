import Ember from 'ember';

export default Ember.Controller.extend({
  data: Ember.inject.service(),

  metric: null,
  startDate: null,
  endDate: null,
  datasource: null,

  loadData() {
    if (this.metric && this.startDate && this.endDate) {
      let site = this.get('model');
      const siteId = site.id;
      let params = {
        id: siteId,
        metrics: this.metric,
        date1: this.startDate.toISOString().split('T')[0],
        date2: this.endDate.toISOString().split('T')[0]
      };
      this.get('data').getData(params).then(data => this.set('datasource', data));
    } else {
      this.set('datasource', null);
    }
  },

  actions: {
    setMetric(metric) {
      this.set('metric', metric);
      this.loadData();
    },

    setStartDate(date) {
      this.set('startDate', date);
      this.loadData();
    },

    setEndDate(date) {
      this.set('endDate', date);
      this.loadData();
    }
  }
});
