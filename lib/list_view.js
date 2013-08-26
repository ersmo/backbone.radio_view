(function() {
  var _ref,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Backbone.RadioListView = (function(_super) {
    __extends(RadioListView, _super);

    function RadioListView() {
      this.renderRadio = __bind(this.renderRadio, this);
      this.render = __bind(this.render, this);
      this.initialize = __bind(this.initialize, this);
      _ref = RadioListView.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    RadioListView.prototype.template = JST.radioList;

    RadioListView.prototype.defaults = {
      name: 'input',
      text: '',
      value: '',
      inline: false,
      defaultValue: null,
      checkedStyle: 'input-checked-green'
    };

    RadioListView.prototype.initialize = function() {
      this.options = _.defaults(this.options, this.defaults);
      this.listenTo(this.collection, 'reset sync', this.render);
      return this.render();
    };

    RadioListView.prototype.render = function() {
      this.$el.html(this.template());
      return this.renderRadio();
    };

    RadioListView.prototype.renderRadio = function() {
      var $div,
        _this = this;
      $div = this.$el.find('.form_radio_list');
      return this.collection.each(function(model) {
        var radioItemView;
        radioItemView = new Backbone.RadioItemView({
          model: model,
          name: _this.options.name,
          text: _this.options.text,
          value: _this.options.value,
          inline: _this.options.inline,
          checkedStyle: _this.options.checkedStyle,
          selected: _this.options.defaultValue === model.get(_this.options.value)
        });
        return $div.append(radioItemView.render().el);
      });
    };

    return RadioListView;

  })(Backbone.View);

}).call(this);
