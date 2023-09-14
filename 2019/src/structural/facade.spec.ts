import { logger } from "../util/logger";
import { ShapeMaker } from "./facade";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Facade Pattern", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("ShapeMaker", () => {
    let shapeMaker: ShapeMaker;

    beforeEach(() => {
      shapeMaker = new ShapeMaker();
    });

    describe("when I draw a circle", () => {
      it("should log a circle", () => {
        shapeMaker.drawCircle();

        expect(logger.log).toHaveBeenCalledWith("Circle");
      });
    });

    describe("when I draw a rectangle", () => {
      it("should log a rectangle", () => {
        shapeMaker.drawRectangle();

        expect(logger.log).toHaveBeenCalledWith("Rectangle");
      });
    });

    describe("when I draw a square", () => {
      it("should log a square", () => {
        shapeMaker.drawSquare();

        expect(logger.log).toHaveBeenCalledWith("Square");
      });
    });
  });
});
