import Ember from 'ember';

export default Ember.Component.extend({

  adjustView() {
    Ember.$('.navstate').each(function(index, a) {
      if (a.innerHTML == 'Geospatial View') {
        Ember.$(a).parent().addClass('active');
      }
      else {
        Ember.$(a).parent().removeClass('active');
      }
    });
  },

  setupGeo: function() {
      this.adjustView();
      Ember.$('#container').empty();
      var bombMap = new Datamap({
        element: document.getElementById('container'),
        scope: 'world',
        geographyConfig: {
          popupOnHover: true,
          highlightOnHover: true
        },
        fills: {
          'USA': '#d9534f',
          'IND': '#5cb85c',
          'CHN': '#5bc0de',
          'CAN': '#428bca',
          'JPN': '#783838',
          'AUS': '#2bd0c3',
          'BRA': '#9db22e',
          'SWE': '#6673d6',
          'ARG': '#63a10b',
          'DEU': '#274358',
          'FRA': '#a14bd2',
          'ZAF': '#81473d',
          'ESP': '#1f80a5',
          'MDG': '#511446',
          defaultFill: '#d3d3d3'
        },
        data: {
          'CAN': {fillKey: 'CAN'},
          'IND': {fillKey: 'IND'},
          'USA': {fillKey: 'USA'},
          'CHN': {fillKey: 'CHN'},
          'JPN': {fillKey: 'JPN'},
          'AUS': {fillKey: 'AUS'},
          'BRA': {fillKey: 'BRA'},
          'SWE': {fillKey: 'SWE'},
          'ARG': {fillKey: 'ARG'},
          'DEU': {fillKey: 'DEU'},
          'FRA': {fillKey: 'FRA'},
          'ZAF': {fillKey: 'ZAF'},
          'ESP': {fillKey: 'ESP'},
          'MDG': {fillKey: 'MDG'}

        }
      });
      Ember.$.get('/csv/geo.csv').then(function(data) {
        var circles = Ember.$.csv.toArrays(data).map(function(csv) {
          var obj = {};
          obj['radius'] = 15;
          obj['size'] = csv[0];
          obj['fillKey'] = csv[1];
          obj['name'] = csv[2];
          obj['latitude'] = csv[3];
          obj['longitude'] = csv[4];
          return obj;
        });
        console.log(circles);
        bombMap.bubbles(circles, {
          popupTemplate: function (geo, data) {
            return ['<div class="hoverinfo">' +  data.name + " </br> " + data.size + " Thousand Employees" + '</div>'];
          }
        });
      });

      Ember.$(window).resize(this.setupGeo);
  }.on('didInsertElement')

});
