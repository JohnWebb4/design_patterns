import { logger } from "../util/logger";
import { JumpAction, Person, RunAction } from "./bridge";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Bridge pattern", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("Person", () => {
    let person: Person;

    describe("when I create a running person", () => {
      it("should run", () => {
        const runAction = new RunAction();
        person = new Person("Usain Bolt", runAction);

        person.doAction("really fast");

        expect(logger.log).toHaveBeenCalledWith("Usain Bolt ran: really fast");
      });
    });

    describe("when I create a jumping person", () => {
      it("should jump", () => {
        const jumpAction = new JumpAction();
        person = new Person("Jack Flash", jumpAction);

        person.doAction("it's a gas gas gas");

        expect(logger.log).toHaveBeenCalledWith("Jack Flash jumped: it's a gas gas gas");
      });
    });
  });
});
