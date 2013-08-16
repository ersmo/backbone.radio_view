
class Backbone.RadioListView extends Backbone.View

  template: JST.radioList

  defaults:
    name: 'input'
    text: ''
    value: ''
    inline: false
    defaultValue: null
    checkedStyle: 'input-checked-green'
    # checkedStyle可選顏色 red/green/blue/yellow/oringe/purple/pink

  initialize: =>
    @options = _.defaults @options, @defaults
    @listenTo @collection, 'reset sync', @render
    @render()

  render: =>
    @$el.html @template()
    @renderRadio()

  renderRadio: =>
    $div = @$el.find('.form_radio_list')
    @collection.each (model) =>
      radioItemView = Backbone.RadioItemView
        model: model
        name: @options.name
        text: @options.text
        value: @options.value
        inline: @options.inline
        checkedStyle: @options.checkedStyle
        selected: @options.defaultValue == model.get(@options.value)
      $div.append radioItemView.render().el
