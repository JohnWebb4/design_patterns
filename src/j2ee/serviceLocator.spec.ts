import { logger } from "../util/logger";

import {
  Cache,
  DatabaseService,
  ServiceLocator,
  ServiceTypes,
  UrlService,
} from "./serviceLocator";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Service Locator", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("ServiceLocator", () => {
    beforeEach(() => {
      ServiceLocator.cache = new Cache();
    });

    describe("when I create a database service", () => {
      it("should return a database service", () => {
        const service = ServiceLocator.getService(ServiceTypes.DATABASE_SERVICE);

        expect(service).toBeInstanceOf(DatabaseService);
      });
    });

    describe("when I create a url service", () => {
      it("should return a url service", () => {
        const service = ServiceLocator.getService(ServiceTypes.URL_SERVICE);

        expect(service).toBeInstanceOf(UrlService);
      });
    });

    describe("when I get a service for the first time", () => {
      it("should cache a new service", () => {
        expect(ServiceLocator.cache).toEqual({ services: []});

        const service = ServiceLocator.getService(ServiceTypes.DATABASE_SERVICE);

        expect(ServiceLocator.cache).toEqual({
          services: [service],
        });
      });
    });

    describe("when I get a cached service", () => {
      it("should return the cached service", () => {
        expect(ServiceLocator.cache).toEqual({
          services: [],
        });

        const service1 = ServiceLocator.getService(ServiceTypes.URL_SERVICE);

        expect(ServiceLocator.cache).toEqual({
          services: [service1],
        });

        const service2 = ServiceLocator.getService(ServiceTypes.URL_SERVICE);

        expect(ServiceLocator.cache).toEqual({
          services: [service1],
        });

        expect(service1).toBe(service2);
      });
    });
  });

  describe("DatabaseServie", () => {
    let databaseService: DatabaseService;

    beforeEach(() => {
      databaseService = new DatabaseService();
    });

    describe("when I execute the database service", () => {
      it("should log executing database service", () => {
        databaseService.execute();

        expect(logger.log).toHaveBeenCalledWith("Starting Database Service");
      });
    });
  });

  describe("UrlService", () => {
    let urlService: UrlService;

    beforeEach(() => {
      urlService = new UrlService();
    });

    describe("when I execute the url service", () => {
      it("should log executing url service", () => {
        urlService.execute();

        expect(logger.log).toHaveBeenCalledWith("Starting Url Service");
      });
    });
  });
});
