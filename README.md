# Modules Map

A map to register urls for modules as [potential solution to this problem](https://lea.verou.me/2020/11/the-case-for-weak-dependencies-in-js/).

```js
// the module owner should register the module
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
