import { logger } from "../util/logger";

import { Dog, DogController, DogView } from "./mvc";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("MVC Pattern", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("DogController", () => {
    let dogController: DogController;

    beforeEach(() => {
      dogController = new DogController(new Dog(), new DogView());
    });

    describe("when I set the dog name and breed, and view it", () => {
      it("should display the dog information", () => {
        dogController.setDogName("Rex");
        dogController.setDogBreed("Beagle");

        dogController.updateView();

        expect(logger.log).toHaveBeenCalledWith("Dog:\n\tname: Rex\n\tbreed: Beagle");
      });
    });
  });
});
