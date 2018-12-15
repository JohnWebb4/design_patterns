import { ShapeFactory } from "./flyweight";

import { logger } from "../util/logger";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Flyweight Pattern", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("Shape Factor", () => {
    let shapeFactory: ShapeFactory;

    beforeEach(() => {
      shapeFactory = new ShapeFactory();
    });

    describe("when I create objects of the same color", () => {
      it("should return the same object", () => {
        const blue1 = shapeFactory.getCircle("Blue");

        blue1.x = 10;
        blue1.y = 10;

        const blue2 = shapeFactory.getCircle("Blue");

        blue2.y = 20;

        expect(blue1).toBe(blue2);

        blue1.draw();

        expect(logger.log).toHaveBeenCalledWith("Blue circle at (10, 20)");
      });
    });
  });
});
