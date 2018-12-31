import { logger } from "../util/logger";

import { FrontController } from "./frontController";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Front Controller Pattern", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("FrontController", () => {
    let frontController: FrontController;

    beforeEach(() => {
      frontController = new FrontController();
    });

    describe("when I dispatch a request", () => {
      it("should authenticate user", () => {
        frontController.dispatchRequest("MENU");

        expect(logger.log).toHaveBeenCalledWith("Page Request: MENU");
        expect(logger.log).toHaveBeenCalledWith("Authenticated");
      });
    });

    describe("when I dispatch a menu request", () => {
      it("dispatch menu", () => {
        frontController.dispatchRequest("MENU");

        expect(logger.log).toHaveBeenCalledWith("Page Request: MENU");
        expect(logger.log).toHaveBeenCalledWith("Authenticated");
        expect(logger.log).toHaveBeenCalledWith("Select a game mode!");
      });
    });

    describe("when I dispatch a game request", () => {
      it("dispatch menu", () => {
        frontController.dispatchRequest("GAME");

        expect(logger.log).toHaveBeenCalledWith("Page Request: GAME");
        expect(logger.log).toHaveBeenCalledWith("Authenticated");
        expect(logger.log).toHaveBeenCalledWith("Enjoy the game!");
      });
    });
  });
});
