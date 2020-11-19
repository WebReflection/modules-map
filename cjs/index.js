'use strict';
let get, has, set;
if (globalThis.Modules)
  ({get, has, set} = Modules);
else {
  const _ = new Map;
  get = module => import(_.get(module));
  has = module => _.has(module);
  set = (module, url) => {
    if (_.has(module))
      console.warn('duplicated module', module);
    _.set(module, url);
  };
  globalThis.Modules = {get, has, set};
}

exports.get = get;
exports.has = has;
exports.set = set;
