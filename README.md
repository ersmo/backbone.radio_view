# backbone.radio_view

> Backbone radio view helper

## Usage

```js
new Backbone.RadioListView({
  el: $('.input-user'),
  collection: new Backbone.Collection([{
    id: 1,
    name: 'jarvis'
  }, {
    id: 2,
    name: 'kinua'
  }]),
  name: 'user_name',
  text: 'name',
  value: 'id',
  defaultValue: 1
});

new Backbone.RadioItemView({
  el: $('.input-user'),
  model: new Backbone.Model({
    id: 1,
    name: 'jarvis'
  }),
  name: 'user_name',
  text: 'name',
  value: 'id',
  selected: true
});

```

## Options

Backbone.RadioListView

```coffee
defaults:
  name: 'input'
  text: ''
  value: ''
  inline: false
  defaultValue: null
```

Backbone.RadioItemView

```coffee
defaults:
  name: 'input'
  text: ''
  value: ''
  selected: null
  inline: false
```

## License

Copyright (c) 2013 Jarvis Ao Ieong   
Licensed under the MIT license.
