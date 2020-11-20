# Modules Map

[![Build Status](https://travis-ci.com/WebReflection/modules-map.svg?branch=main)](https://travis-ci.com/WebReflection/modules-map) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/modules-map/badge.svg?branch=main)](https://coveralls.io/github/WebReflection/modules-map?branch=main)

A map (extend) to register urls for modules as [potential solution to this problem](https://lea.verou.me/2020/11/the-case-for-weak-dependencies-in-js/) and import via `get(module)`.

```js
// the module owner could register the module
import Modules from 'modules-map';
Modules.set('my-module', 'https://unpkg.com/my-module?module');

// the module consumer can verify it's been registered
import Modules from 'modules-map';
if (Modules.has('my-module'))
  Modules.get('my-module').then(module => {
    module.doStuff();
  });
```

The module itself registers the global `Mpdules` *map* helper so that modules, bundlers, or even runtime scripts, can all benefit from the shared registry.

**Note** this module requires browsers compatible with *ES2015* and [dynamic `import(...)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Dynamic_Imports) so *it cannot work in IE11 or lower*.
