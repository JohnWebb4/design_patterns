import { logger } from "../util/logger";
import { Dance, Jump, Manager, Person, Run } from "./command";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Command Pattern", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("Manager", () => {
    let manager: Manager;

    beforeEach(() => {
      manager = new Manager();
    });

    describe("when I add several commands", () => {
      it("should store commands", () => {
        const person = new Person("Unknown");

        manager.add(new Run(person));
        manager.add(new Jump(person));

        expect(manager.commands).toEqual([
          {
            person: {
              name: "Unknown",
            },
          },
          {
            person: {
              name: "Unknown",
            },
          },
        ]);
      });
    });

    describe("when I execute commands", () => {
      it("should log the commands", () => {
        const person = new Person("Unknown");

        manager.add(new Run(person));
        manager.add(new Jump(person));
        manager.add(new Dance(person));

        manager.handleCommands();

        expect(logger.log).toHaveBeenCalledWith("Unknown ran");
        expect(logger.log).toHaveBeenCalledWith("Unknown jumped");
        expect(logger.log).toHaveBeenCalledWith("Unknown danced");
      });
    });
  });
});
