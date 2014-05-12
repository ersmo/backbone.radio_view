
class Backbone.RadioItemView extends Backbone.View

  template: JST.radioItem

  tagName: 'label'

  className: 'radio'

  defaults:
    name: 'input'
    text: ''
    value: ''
    selected: null
    inline: false
    checkedStyle: 'input-checked-green'

  events:
    'click': 'checked'

  initialize: =>
    @options = _.defaults @options, @defaults
    @listenTo @model, 'change', @render
    @$el.on 'reset', @reset
    @render()

  render: =>
    @$el.addClass 'inline' if @options.inline
    @$el.addClass @options.checkedStyle if @options.selected
    @$el.html @template
      model: @model.toJSON()
      name: if _.isFunction @options.name then @options.name(@model) else @options.name
      text: if _.isFunction @options.text then @options.text(@model) else @model.get(@options.text)
      value: if _.isFunction @options.value then @options.value(@model) else @model.get(@options.value)
      checked: @options.selected
      checkedStyle: @options.checkedStyle
    @$input = @$el.find('input')
    this

  reset: =>
    @$el.removeClass @options.checkedStyle
    @$input.attr 'checked', false

  checked: (e) =>
    $("input:radio[name=#{@options.name}]").parent('label').removeClass(@options.checkedStyle)

    if $(e.target).prop('tagName') is 'INPUT'
      @$el.addClass @options.checkedStyle
      return

    e.preventDefault()
    if @$input.attr 'checked'
      @$input.attr 'checked', false
    else
      @$input.attr 'checked', 'checked'
      @$el.addClass @options.checkedStyle
