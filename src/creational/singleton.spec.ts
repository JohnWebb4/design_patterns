import "jest";

import { Singleton } from "./singleton";

describe("Singleton Pattern", () => {
  describe("when I get the instance", () => {
    it("it should alwasy be the same object", () => {
      expect(Singleton.getInstance()).toBe(Singleton.getInstance())
    });

    it("should have the static properties", () => {
      const singularity = Singleton.getInstance();

      expect(singularity.mass).toBe(1000)
      expect(singularity.size).toBe(10);
      expect(singularity.name).toBe("Monocerotis");
    });
  });

  describe("when I call implode", () => {
    it("should implode the statid instance", () => {
      const singularity = Singleton.getInstance();

      expect(singularity.implode()).toBe("Monocerotis Boom!");
    });
  });
});