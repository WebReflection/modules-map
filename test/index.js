const Modules = require('../cjs');

console.assert(!Modules.has('test'), 'unexpected entry');
Modules.set('test', './test-nope.js');
Modules.set('test', './test.js');
console.assert(Modules.has('test'), 'unexpected state');
Modules.get('test').then(({default: ok}) => {
  delete require.cache[require.resolve('../cjs')];
  require('../cjs');
  console.log(ok);
});
