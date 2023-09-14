import { logger } from "../util/logger";
import { AbstractLogger, ErrorLogger, InfoLogger, WarningLogger } from "./responsibility";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Responsibility Pattern", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("Loggers", () => {
    describe("when I chain loggers", () => {
      it("should write a message if greater than or equal to the log level", () => {
        const chainedLogger = new InfoLogger()
          .next(new WarningLogger()
          .next(new ErrorLogger()));

        chainedLogger.log("Test", AbstractLogger.ERROR);

        expect(logger.log).toHaveBeenCalledWith("Info: Test");
        expect(logger.log).toHaveBeenCalledWith("Warn: Test");
        expect(logger.log).toHaveBeenCalledWith("Error: Test");
      });
    });

    describe("when I log nothing", () => {
      it("should log log info, warning, or an error", () => {
        const chainedLogger = new InfoLogger()
          .next(new WarningLogger()
          .next(new ErrorLogger()));

        chainedLogger.log("Test", AbstractLogger.NONE);

        expect(logger.log).not.toHaveBeenCalled();
      });
    });
  });
});
