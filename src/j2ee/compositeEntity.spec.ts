import { logger } from "../util/logger";

import { EnvironmentEntityStates, NatureClient } from "./compositeEntity";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Composite Entity Pattern", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("NatureClient", () => {
    describe("when I set data", () => {
      it("should set data", () => {
        const natureClient = new NatureClient();

        natureClient.setEnvironment(EnvironmentEntityStates.ON, EnvironmentEntityStates.OFF);

        natureClient.printForecast();

        expect(logger.log).toHaveBeenCalledWith("Lightning: 1");
        expect(logger.log).toHaveBeenCalledWith("Thunder: 0");
      });
    });
  });
});
