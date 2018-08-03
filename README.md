# maptalks.geosplit

A tool to split Polygon or Line whith one or more lines.

## Examples

### [DEMO](https://cxiaof.github.io/maptalks.geosplit/demo/index.html)

## Install

-   Install with npm: `npm install maptalks.geosplit`.
-   Download from [dist directory](https://github.com/cXiaof/maptalks.geosplit/tree/master/dist).
-   Use unpkg CDN: `https://unpkg.com/maptalks.geosplit/dist/maptalks.geosplit.min.js`

## Usage

As a plugin, `maptalks.geosplit` must be loaded after `maptalks.js` in browsers. You can also use `'import { GeoSplit } from "maptalks.geosplit"` when developing with webpack.

```html
<script type="text/javascript" src="https://unpkg.com/maptalks/dist/maptalks.min.js"></script>
<script type="text/javascript" src="https://unpkg.com/maptalks.geosplit/dist/maptalks.geosplit.min.js"></script>
<script>
    // new GeoSplit and layer
    const ms = new maptalks.GeoSplit()
    const layer = new maptalks.VectorLayer('v').addTo(map)
</script>
```

## API Reference

```javascript
new maptalks.GeoSplit()
```

## Contributing

We welcome any kind of contributions including issue reportings, pull requests, documentation corrections, feature requests and any other helps.

## Develop

The only source file is `index.js`.

It is written in ES6, transpiled by [babel](https://babeljs.io/) and tested with [mocha](https://mochajs.org) and [expect.js](https://github.com/Automattic/expect.js).

### Scripts

-   Install dependencies

```shell
$ npm install
```

-   Watch source changes and generate runnable bundle repeatedly

```shell
$ gulp watch
```

-   Tests

```shell
$ npm test
```

-   Watch source changes and run tests repeatedly

```shell
$ gulp tdd
```

-   Package and generate minified bundles to dist directory

```shell
$ gulp minify
```

-   Lint

```shell
$ npm run lint
```

## More Things

-   [maptalks.autoadsorb](https://github.com/cXiaof/maptalks.autoadsorb/issues)
-   [maptalks.multisuite](https://github.com/cXiaof/maptalks.multisuite/issues)
-   [maptalks.geosplit](https://github.com/cXiaof/maptalks.geosplit/issues) (to be continued)
