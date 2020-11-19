# Modules Map

[![Build Status](https://travis-ci.com/WebReflection/modules-map.svg?branch=main)](https://travis-ci.com/WebReflection/modules-map) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/modules-map/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/modules-map?branch=main)

A map to register urls for modules as [potential solution to this problem](https://lea.verou.me/2020/11/the-case-for-weak-dependencies-in-js/).

```js
// the module owner could register the module
import {set: register} from 'modules-map';
register('my-module', 'https://unpkg.com/my-module?module');

// the module consumer can verify it's been registered
import {has, get} from 'modules-map';
if (has('my-module'))
  get('my-module').then(module => {
    module.doStuff();
  });
```

The module itself registers the global `Mpdules.{get, set, has}` helper so that modules, bundlers, or even runtime scripts, can all benefit from the shared registry.

**Note** this module requires browsers compatible with [dynamic `import(...)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports) so *it cannot work in IE11 or lower*.
