self.Modules = (function (exports) {
  'use strict';

  if (globalThis.Modules) {
    var _Modules = Modules;
    exports.get = _Modules.get;
    exports.has = _Modules.has;
    exports.set = _Modules.set;
  } else {
    var _ = new Map();

    exports.get = function get(module) {
      return import(_.get(module));
    };

    exports.has = function has(module) {
      return _.has(module);
    };

    exports.set = function set(module, url) {
      if (_.has(module)) console.warn('duplicated module', module);

      _.set(module, url);
    };

    globalThis.Modules = {
      get: exports.get,
      has: exports.has,
      set: exports.set
    };
  }

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
