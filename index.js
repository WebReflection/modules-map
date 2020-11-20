self.Modules || (
  self.Modules = new class extends Map {
    get(module) {
      return import(super.get(module));
    }
  }
);
