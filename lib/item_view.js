(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Backbone.RadioItemView = (function(_super) {
    __extends(RadioItemView, _super);

    function RadioItemView() {
      this.checked = __bind(this.checked, this);
      this.reset = __bind(this.reset, this);
      this.render = __bind(this.render, this);
      this.initialize = __bind(this.initialize, this);
      _ref = RadioItemView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    RadioItemView.prototype.template = JST.radioItem;

    RadioItemView.prototype.tagName = 'label';

    RadioItemView.prototype.className = 'radio';

    RadioItemView.prototype.defaults = {
      name: 'input',
      text: '',
      value: '',
      selected: null,
      inline: false,
      checkedStyle: 'input-checked-green'
    };

    RadioItemView.prototype.events = {
      'click': 'checked'
    };

    RadioItemView.prototype.initialize = function() {
      this.options = _.defaults(this.options, this.defaults);
      this.listenTo(this.model, 'change', this.render);
      this.$el.on('reset', this.reset);
      return this.render();
    };

    RadioItemView.prototype.render = function() {
      if (this.options.inline) {
        this.$el.addClass('inline');
      }
      if (this.options.selected) {
        this.$el.addClass(this.options.checkedStyle);
      }
      this.$el.html(this.template({
        model: this.model.toJSON(),
        name: _.isFunction(this.options.name) ? this.options.name(this.model) : this.options.name,
        text: _.isFunction(this.options.text) ? this.options.text(this.model) : this.model.get(this.options.text),
        value: _.isFunction(this.options.value) ? this.options.value(this.model) : this.model.get(this.options.value),
        checked: this.options.selected,
        checkedStyle: this.options.checkedStyle
      }));
      this.$input = this.$el.find('input');
      return this;
    };

    RadioItemView.prototype.reset = function() {
      this.$el.removeClass(this.options.checkedStyle);
      return this.$input.attr('checked', false);
    };

    RadioItemView.prototype.checked = function(e) {
      $("input:radio[name=" + this.options.name + "]").parent('label').removeClass(this.options.checkedStyle);
      if ($(e.target).prop('tagName') === 'INPUT') {
        this.$el.addClass(this.options.checkedStyle);
        return;
      }
      e.preventDefault();
      if (this.$input.attr('checked')) {
        return this.$input.attr('checked', false);
      } else {
        this.$input.attr('checked', 'checked');
        return this.$el.addClass(this.options.checkedStyle);
      }
    };

    return RadioItemView;

  })(Backbone.View);

}).call(this);
