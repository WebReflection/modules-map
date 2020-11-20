'use strict';
module.exports = globalThis.Modules || (
  globalThis.Modules = new class extends Map {
    get(module) {
      return import(super.get(module));
    }
  }
);
