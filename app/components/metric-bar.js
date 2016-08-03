import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['col-xs-12', 'col-sm-12', 'col-md-5', 'col-lg-5'],
  setupBar: function() {
    var chart2;
    Ember.$.get('/json/reportedIssues.json').then(function (data) {
      chart2 = new Highcharts.Chart({
        chart: {
          renderTo: 'barGraphBox',
          type: 'column'
        },
        title: {
          text: 'Reported Issues Status (Live)'
        },
        xAxis: {
          categories: data.years
        },
        yAxis: {
          title: {
            text: 'Issues Reported (In Hundreds)'
          }
        },
        series: data.issues,
        credits: {
          enabled: false
        }
      });
    });
  }.on('didInsertElement')
});
