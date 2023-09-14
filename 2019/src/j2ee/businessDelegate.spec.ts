import { logger } from "../util/logger";

import { Client, PetServiceDelegate } from "./businessDelegate";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Business Delegate Pattern", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("Dog Washing Service", () => {
    describe("when I start a dog washing service client", () => {
      it("should start dog washing service", () => {
        const dogWashingDelegate = new PetServiceDelegate();

        dogWashingDelegate.setServiceType("Dog Washing");

        const client = new Client(dogWashingDelegate);

        client.doTask();

        expect(logger.log).toHaveBeenCalledWith("Started Dog Washing Service");
      });
    });
  });
  describe("Dog Walking Service", () => {
    describe("when I start a dog walking service client", () => {
      it("should start dog walking service", () => {
        const dogWalkingDelegate = new PetServiceDelegate();

        dogWalkingDelegate.setServiceType("Dog Walking");

        const client = new Client(dogWalkingDelegate);

        client.doTask();

        expect(logger.log).toHaveBeenCalledWith("Started Dog Walking Service");
      });
    });
  });
});
