import { logger } from "../util/logger";

import { User } from "./mediator";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Mediator Pattern", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("User", () => {
    let realDate: DateConstructor["now"];

    beforeEach(() => {
      realDate = Date.now;
      Date.now = jest.fn().mockReturnValue(123);
    });

    afterEach(() => {
      Date.now = realDate;
    });

    describe("when I create multiple users", () => {
      it("should log several users", () => {
        const userTod = new User("Tod");
        const userDan = new User("Dan");

        userTod.sendMessage("Hello");
        userDan.sendMessage("Y o");

        expect(logger.log).toHaveBeenCalledWith("123: [Tod] Hello");
        expect(logger.log).toHaveBeenCalledWith("123: [Dan] Y o");
      });
    });
  });
});
