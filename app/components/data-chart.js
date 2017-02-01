import Ember from 'ember';

export default Ember.Component.extend({
  chartOptions: Ember.computed('data', function () {
    let data = this.get('data');
    if (!data) {
      return {};
    }
    let categories = data.time_intervals
      .map(interval => interval
        .map(date => new Date(date).toLocaleDateString('ru')).join(' - '));
    return {
      chart: {
        type: 'spline'
      },
      xAxis: {
        visible: false
      }
    };
  }),

  chartData: Ember.computed('data', function () {
    let data = this.get('data');
    if (!data) {
      return [];
    }
    let metrics = data.data[0].metrics;
    return metrics.map(metric => {
      return {
        data: metric
      }
    });
  })
});
