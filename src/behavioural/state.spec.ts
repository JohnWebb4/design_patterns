import { logger } from "../util/logger";
import { Context, StartState, StopState } from "./state";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("State Pattern", () => {
  describe("Context", () => {
    describe("when I perform a start action", () => {
      it("should log start action", () => {
        const context = new Context();
        const startState = new StartState();

        startState.doAction(context);

        expect(logger.log).toHaveBeenCalledWith("Start Action");
        expect(context.state).toBe(startState);
      });
    });

    describe("when I perform a start and stop action", () => {
      it("should update state on each action", () => {
        const context = new Context();
        const startState = new StartState();
        const stopState = new StopState();

        startState.doAction(context);

        expect(logger.log).toHaveBeenCalledWith("Start Action");
        expect(context.state).toBe(startState);

        stopState.doAction(context);

        expect(logger.log).toHaveBeenCalledWith("Stop Action");
        expect(context.state).toBe(stopState);
      });
    });
  });
});
