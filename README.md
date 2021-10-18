# ember-iframe-resizer-modifier

Ember modifier for [`iframe-resizer`](https://github.com/davidjbradshaw/iframe-resizer)

## Compatibility

- Ember.js v3.12 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Installation

```
ember install ember-iframe-resizer-modifier
```

Note: you application must have a dependency on `ember-auto-import` v2 in order to use this addon as well.

## Usage

This addon provides a modifier that can be used to ensure that an `iframe` in your Ember app is always resized to match the contents of the `iframe`.

In your template, you can use `iframe-resizer` on an `iframe` element like so:

```handlebars
<iframe src="/my-iframe.html" {{iframe-resizer log=true}}></iframe>
```

Any options that are supported by the `iframeResizer` function can be passed as named arguments to the modifier. Any positional arguments to the modifier are treated as additional objects containing options for the `iframeResizer` function; all of these potential options are merged together before passing them to `iframeResizer`.

### Content Window JS

The JS file to include on the page within the `iframe` is also exposed through this addon. The [`js` directory of the `iframe-resizer` repository](https://github.com/davidjbradshaw/iframe-resizer/tree/master/js) is made available at `/iframe-resizer`. See the [test `iframe.html` file](./tests/dummy/public/iframe.html) for an example.

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
