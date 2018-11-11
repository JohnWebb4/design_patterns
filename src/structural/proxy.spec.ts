import { logger } from "../util/logger";

import { ProxyImage } from "./proxy";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Proxy Pattern", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("Proxy Image", () => {
    let proxyImage: ProxyImage;

    beforeEach(() => {
      proxyImage = new ProxyImage("./image.jpeg");
    });

    describe("when I call proxy display multiple times", () => {
      it("should only load the real image once", () => {
        proxyImage.display();

        expect(logger.log).toHaveBeenCalledWith("Loading ./image.jpeg");
        expect(logger.log).toHaveBeenCalledWith("Displaying ./image.jpeg");

        for (let i = 0; i < 20; i++) {
          proxyImage.display();

          expect(logger.log).toHaveBeenNthCalledWith(i + 2, "Displaying ./image.jpeg");
        }
      });
    });
  });
});
