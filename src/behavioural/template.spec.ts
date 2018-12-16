import { logger } from "../util/logger";

import { Cricket, Football } from "./template";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Template Pattern", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("Cricket", () => {
    describe("when I play a game", () => {
      it("should call cricket's initilize, start game and end game", () => {
        const cricket = new Cricket();

        cricket.play();

        expect(logger.log).toHaveBeenCalledWith("Setting up cricket");
        expect(logger.log).toHaveBeenCalledWith("Starting cricket");
        expect(logger.log).toHaveBeenCalledWith("Ending cricket");
      });
    });
  });

  describe("Football", () => {
    describe("when I play a game", () => {
      it("should call football's initilize, start game and end game", () => {
        const football = new Football();

        football.play();

        expect(logger.log).toHaveBeenCalledWith("Setting up football");
        expect(logger.log).toHaveBeenCalledWith("Starting football");
        expect(logger.log).toHaveBeenCalledWith("Ending football");
      });
    });
  });
});
