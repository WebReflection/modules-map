export default globalThis.Modules || (
  globalThis.Modules = new class extends Map {
    get(module) {
      return import(super.get(module));
    }
  }
);
