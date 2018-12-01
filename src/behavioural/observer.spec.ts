import { logger } from "../util/logger";
import { BlueJayObserver, HummingBirdObserver, SparrowObserver, Subject } from "./observer";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Observable Pattern", () => {
  let feedSubject: Subject;

  beforeEach(() => {
    feedSubject = new Subject();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("BlueJayObserver", () => {
    it("should log BlueJay feed count", () => {
      const blueJayObserver = new BlueJayObserver(feedSubject);

      feedSubject.state = 1;

      expect(logger.log).toHaveBeenCalledTimes(1);
      expect(logger.log).toHaveBeenCalledWith("Blue Jays: 1");
    });
  });

  describe("HummingbirdObserver", () => {
    it("should log Hummingbird feed count", () => {
      const hummingbirdObserver = new HummingBirdObserver(feedSubject);

      feedSubject.state = 2;

      expect(logger.log).toHaveBeenCalledTimes(1);
      expect(logger.log).toHaveBeenCalledWith("Hummingbirds: 2");
    });
  });

  describe("SparrowObserver", () => {
    it("should log BlueJay feed count", () => {
      const sparrows = new SparrowObserver(feedSubject);

      feedSubject.state = 3;

      expect(logger.log).toHaveBeenCalledTimes(1);
      expect(logger.log).toHaveBeenCalledWith("Sparrows: 3");
    });
  });

  describe("Multiple Observers", () => {
    it("should log feed count for all birds", () => {
      const blueJayObserver = new BlueJayObserver(feedSubject);
      const hummingbirdObserver = new HummingBirdObserver(feedSubject);
      const sparrows = new SparrowObserver(feedSubject);

      feedSubject.state = 4;

      expect(logger.log).toHaveBeenCalledTimes(3);
      expect(logger.log).toHaveBeenCalledWith("Blue Jays: 4");
      expect(logger.log).toHaveBeenCalledWith("Hummingbirds: 4");
      expect(logger.log).toHaveBeenCalledWith("Sparrows: 4");
    });
  });
});
