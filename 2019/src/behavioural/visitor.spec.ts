import { logger } from "../util/logger";

import { Application, DesktopService, SoundService, VideoService } from "./visitor";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Visitor Pattern", () => {
  let application: Application;

  beforeEach(() => {
    jest.resetAllMocks();

    application = new Application();
  });

  describe("Sound Service", () => {
    describe("when an application subscribes", () => {
      it("should subscribe to sound service", () => {
        const soundService = new SoundService();

        soundService.accept(application);

        expect(logger.log).toHaveBeenCalledWith("Subscribing to sound service");
      });
    });
  });

  describe("Video Service", () => {
    describe("when an application subscribes", () => {
      it("should subscribe to video service", () => {
        const videoService = new VideoService();

        videoService.accept(application);

        expect(logger.log).toHaveBeenCalledWith("Subscribing to video service");
      });
    });

  });

  describe("Desktop Service", () => {
    describe("when an application subscribes", () => {
      it("should subscribe to desktop service, and all child services", () => {
        const desktopService = new DesktopService();

        desktopService.accept(application);

        expect(logger.log).toHaveBeenCalledWith("Subscribing to sound service");
        expect(logger.log).toHaveBeenCalledWith("Subscribing to video service");
        expect(logger.log).toHaveBeenCalledWith("Subscribing to desktop service(s)");
      });
    });

  });
});
