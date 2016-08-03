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
      if (a.innerHTML == 'Issues') {
        Ember.$(a).parent().addClass('active');
      }
      else {
        Ember.$(a).parent().removeClass('active');
      }
    });
  },
  _issues: {},
  is: {
    _issues: null
  },
  _backup: null,
  _sort: {
    _a:false,
    _b:false,
    _c:false,
    _d:false,
    _e:false,
    _f:false,
    _g:false,
    _sortSet: false
  },
  issort: {
    isa:false,
    isb:false,
    isc:false,
    isd:false,
    ise:false,
    isf:false,
    isg:false,
    issortSet: false
  },
  actions: {
    change(model) {
      this.adjustView();
      this.is._issues = model.model;
      this._issues['key'] = model.model;
      this.backup = _.cloneDeep(this.is._issues);
    },
    sort(sort, _issues, toggler) {
      switch (sort) {
        case "a":
          if (toggler) {
            this.isa = !this.isa;
            Ember.set(this._sort, "_a", this.isa, true);
          }
          this.issort.issorset = "a";
          Ember.set(this._sort, "_sortSet", this.issort.issorset, true);
          this.is._issues = (this._sort._a) ? _.sortBy(_issues, function(issue) {return issue.stimestamp})
            : _.sortBy(_issues, function(issue) {return issue.stimestamp}).reverse();
          if (this._sort._sortSet) {
            Ember.set(this._issues, 'key', this.is._issues, true);
          }
          return this._issues['key'];
        case "b":
          if (toggler) {
            this.isb = !this.isb;
            Ember.set(this._sort, "_b", this.isb, true);
          }
          this.issort.issorset = "b";
          Ember.set(this._sort, "_sortSet", this.issort.issorset, true);
          this.is._issues = (this._sort._b) ? _.sortBy(_issues, function(issue) {return issue.customername})
            : _.sortBy(_issues, function(issue) {return issue.customername}).reverse();
          if (this._sort._sortSet) {
            Ember.set(this._issues, 'key', this.is._issues, true);
          }
          return this.is._issues['key'];
        case "c":
          if (toggler) {
            this.isc = !this.isc;
            Ember.set(this._sort, "_c", this.isc, true);
          }
          this.issort.issorset = "c";
          Ember.set(this._sort, "_sortSet", this.issort.issorset, true);
          this.is._issues = (this._sort._c) ? _.sortBy(_issues, function(issue) {return issue.customeremail})
            : _.sortBy(_issues, function(issue) {return issue.customeremail}).reverse();
          if (this._sort._sortSet) {
            Ember.set(this._issues, 'key', this.is._issues, true);
          }
          return this.is._issues['key'];
        case "d":
          if (toggler) {
            this.isd = !this.isd;
            Ember.set(this._sort, "_d", this.isd, true);
          }
          this.issort.issorset = "d";
          Ember.set(this._sort, "_sortSet", this.issort.issorset, true);
          this.is._issues = (this._sort._d) ? _.sortBy(_issues, function(issue) {return issue.description})
            : _.sortBy(_issues, function(issue) {return issue.description}).reverse();
          if (this._sort._sortSet) {
            Ember.set(this._issues, 'key', this.is._issues, true);
          }
          return this.is._issues['key'];
        case "e":
          if (toggler) {
            this.ise = !this.ise;
            Ember.set(this._sort, "_e", this.ise, true);
          }
          this.issort.issorset = "e";
          Ember.set(this._sort, "_sortSet", this.issort.issorset, true);
          this.is._issues = (this._sort._e) ? _.sortBy(_issues, function(issue) {return issue.status})
            : _.sortBy(_issues, function(issue) {return issue.status}).reverse();
          if (this._sort._sortSet) {
            Ember.set(this._issues, 'key', this.is._issues, true);
          }
          return this.is._issues['key'];
        case "f":
          if (toggler) {
            this.isf = !this.isf;
            Ember.set(this._sort, "_f", this.isf, true);
          }
          this.issort.issorset = "f";
          Ember.set(this._sort, "_sortSet", this.issort.issorset, true);
          this.is._issues = (this._sort._f) ? _.sortBy(_issues, function(issue) {return issue.closedtimestamp})
            : _.sortBy(_issues, function(issue) {return issue.closedtimestamp}).reverse();
          if (this._sort._sortSet) {
            Ember.set(this._issues, 'key', this.is._issues, true);
          }
          return this.is._issues['key'];
        case "g":
          if (toggler) {
            this.isg = !this.isg;
            Ember.set(this._sort, "_g", this.isg, true);
          }
          this.issort.issorset = "g";
          Ember.set(this._sort, "_sortSet", this.issort.issorset, true);
          this.is._issues = (this._sort._g) ? _.sortBy(_issues, function(issue) {return issue.employeename})
            : _.sortBy(_issues, function(issue) {return issue.employeename}).reverse();
          if (this._sort._sortSet) {
            Ember.set(this._issues, 'key', this.is._issues, true);
          }
          return this.is._issues['key'];

      }
    },
    clearSort() {
      this.issort.isa = false;
      this.issort.isb = false;
      this.issort.isc = false;
      this.issort.isd = false;
      this.issort.ise = false;
      this.issort.isf = false;
      this.issort.isg = false;

      Ember.set(this._sort, "_a", this.isa, true);
      Ember.set(this._sort, "_b", this.isb, true);
      Ember.set(this._sort, "_c", this.isc, true);
      Ember.set(this._sort, "_d", this.isd, true);
      Ember.set(this._sort, "_e", this.ise, true);
      Ember.set(this._sort, "_f", this.isf, true);
      Ember.set(this._sort, "_g", this.isg, true);

      this.issort.issorset = null;
      Ember.set(this._sort, "_sortSet", this.issort.issorset, true);

      this.is._issues = _.cloneDeep(this._backup);
      Ember.set(this._issues, 'key', this.is._issues, true);
    }
  }

});
