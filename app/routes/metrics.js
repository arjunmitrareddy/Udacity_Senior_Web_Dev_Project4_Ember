import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.get('/json/issues.json').then(function(data) {
      var arr = data.map(function(issue) {
        var strArr = issue.description.split(" ");
        var sub = [strArr[0], strArr[1], strArr[2]].join(" ");
        issue.description = sub.toUpperCase();
        return issue;
      });
      return arr;
    })
  },
  setupController: function(controller, model){
    controller.send('change', {model: model});
  }
});
