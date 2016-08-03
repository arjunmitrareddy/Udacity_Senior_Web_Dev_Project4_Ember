import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this.adjustView()
  },
  adjustView() {
    var $viewField = Ember.$('#viewField');
    if ($viewField.hasClass('container')) {
      $viewField.removeClass('container')
    }
    if (!$viewField.hasClass('container-fluid')) {
      $viewField.addClass('container-fluid')
    }
    Ember.$('.navstate').each(function(index, a) {
      if (a.innerHTML == 'Metrics') {
        Ember.$(a).parent().addClass('active');
      }
      else {
        Ember.$(a).parent().removeClass('active');
      }
    });
  },
  issues: null,
  actions: {
    change(model) {
      this.adjustView();
      this.issues = model.model;
    },
    switchIssues() {
      this.transitionToRoute('issues')
    }
  }
});
