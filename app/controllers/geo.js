import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this.adjustView()
  },
  adjustView() {
    var $viewField = Ember.$('#viewField');
    if ($viewField.hasClass('container-fluid')) {
      $viewField.removeClass('container-fluid')
    }
    if (!$viewField.hasClass('container')) {
      $viewField.addClass('container')
    }
    Ember.$('.navstate').each(function(index, a) {
      if (a.innerHTML == 'Geospatial View') {
        Ember.$(a).parent().addClass('active');
      }
      else {
        Ember.$(a).parent().removeClass('active');
      }
    });
  },
  actions: {
    change(model) {
      this.adjustView();
      this.issues = model;
    }
  }
});
