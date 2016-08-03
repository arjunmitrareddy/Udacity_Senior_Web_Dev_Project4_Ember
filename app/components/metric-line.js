import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['col-xs-12', 'col-sm-12', 'col-md-offset-1', 'col-md-5', 'col-lg-offset-1', 'col-lg-5'],
  setupLine: function() {
    var chart1;
    var newh = Ember.$("#lineGraphBox").height();

    Ember.$(window).resize(function () {
      newh = Ember.$("#lineGraphBox").height();
      chart1.redraw();
      chart1.reflow();
    });
    Ember.$.get('/json/customers.json').then(function (data) {
      chart1 = new Highcharts.Chart({
        chart: {
          renderTo: 'lineGraph'
        },
        title: {
          text: 'Paying Customers Over the Years (Live)'
        },
        xAxis: {
          categories: data.years
        },
        yAxis: {
          title: {
            text: 'Customers (In Thousands)'
          }
        },

        series: [{
          name: 'Customers',
          data: data.customers
        }],

        credits: {
          enabled: false
        }
      });
    });
  }.on('didInsertElement')
});
