import { Circle, Rectangle, ShapeCache, Square } from "./prototypal";

describe("Prototype pattern", () => {
  describe("Shape Cache", () => {
    beforeEach(() => {
      ShapeCache.loadCache();
    });

    describe("when I get cache 1", () => {
      it("should return a circle", () => {
        const circle = ShapeCache.getShape("1");

        expect(circle).toBeInstanceOf(Circle);
      });
    });

    describe("when I get cache 2", () => {
      it("should return a rectangle", () => {
        const rectangle = ShapeCache.getShape("2");

        expect(rectangle).toBeInstanceOf(Rectangle);
      });
    });

    describe("when I get cache 3", () => {
      it("should return a square", () => {
        const square = ShapeCache.getShape("3");

        expect(square).toBeInstanceOf(Square);
      });
    });

    describe("when I get from same cache", () => {
      it("should return different objects", () => {
        const circle1 = ShapeCache.getShape("1");
        const circle2 = ShapeCache.getShape("1");

        expect(circle1).not.toBe(circle2);
        expect(circle1).toEqual(circle2);
      });
    });
  });
});
