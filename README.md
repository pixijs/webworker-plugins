# @pixi/webworker-plugins

[![npm version](https://badge.fury.io/js/@pixi%2Fwebworker-plugins.svg)](https://www.npmjs.com/package/@pixi/webworker-plugins)

Plugins for Web Workers.


## Install

```bash
npm install @pixi/webworker-plugins --save-dev
```


## `@pixi/webworker-plugins/jest-transform`

Jest transform for Web Workers.

### Usage

Add the following code to your **jest.config.js**:

```js
module.exports = {
    transform: {
        '\\.worker.ts$': '@pixi/webworker-plugins/lib/jest-transform',
    },
    // ...
};
```


## `@pixi/webworker-plugins/rollup-plugin`

Rollup plugin for Web Workers.

### Usage

Add the following code to your **rollup.config.mjs**:

```js
import webworker from '@pixi/webworker-plugins/rollup-plugin';

export default {
	plugins: [
        webworker(),
	],
    // ...
};
```
