import Ember from 'ember';

export default Ember.Controller.extend({
  init() {
    this.transitionToRoute('metrics');
    setTimeout(() => {
      this.transitionToRoute('geo');
    }, 100);
  }
});
