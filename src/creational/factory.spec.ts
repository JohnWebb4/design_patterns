import "jest";

import { logger } from "../util/logger";
import { Rectangle, ShapeFactory, ShapeTypes, Square } from "./factory";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("factory pattern", () => {
  let shapeFactory: ShapeFactory;

  beforeEach(() => {
    shapeFactory = new ShapeFactory();
  });
  describe("when called with a square", () => {
    it("should create a square", () => {
      const square = shapeFactory.getShape(ShapeTypes.Square);

      expect(square).toBeInstanceOf(Square);
    });

    it("should console log on draw", () => {
      const square = shapeFactory.getShape(ShapeTypes.Square);

      square.draw();

      expect(logger.log).toHaveBeenCalledWith("A Square");
    });
  });

  describe("when called with a rectangle", () => {
    it("should create a rectangle", () => {
      const rectangle = shapeFactory.getShape(ShapeTypes.Rectangle);

      expect(rectangle).toBeInstanceOf(Rectangle);
    });

    it("should console log on draw", () => {
      const rectangle = shapeFactory.getShape(ShapeTypes.Rectangle);

      rectangle.draw();

      expect(logger.log).toHaveBeenCalledWith("A Rectangle");
    });
  });

  describe("when passed a bad shape", () => {
    it("should return null", () => {
      const badShape = shapeFactory.getShape("Bad Shape");

      expect(badShape).toBe(null);
    });
  });
});
