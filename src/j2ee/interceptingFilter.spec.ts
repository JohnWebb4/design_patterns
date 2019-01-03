import { logger } from "../util/logger";

import { AuthFilter, Client, FilterManager, PermissionFilter, Target } from "./interceptingFilter";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Intercepting Filter Pattern", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("AuthFilter", () => {
    let authFilter: AuthFilter;

    beforeEach(() => {
      authFilter = new AuthFilter();
    });

    describe("when I execute a request", () => {
      it("should authenticate the requet", () => {
        authFilter.execute("Test Authentication");

        expect(logger.log).toHaveBeenCalledWith("Authentication request: Test Authentication");
      });
    });
  });

  describe("PermissionFilter", () => {
    let permissionFilter: PermissionFilter;

    beforeEach(() => {
      permissionFilter = new PermissionFilter();
    });

    describe("when I execute a request", () => {
      it("should check permissions of request", () => {
        permissionFilter.execute("Test Permission");

        expect(logger.log).toHaveBeenCalledWith("Permission request: Test Permission");
      });
    });
  });

  describe("Target", () => {
    let target: Target;

    beforeEach(() => {
      target = new Target();
    });

    describe("when I send a request", () => {
      it("should process request", () => {
        target.execute("Test Target");

        expect(logger.log).toHaveBeenCalledWith("Executing: Test Target");
      });
    });
  });

  describe("FilterManager", () => {
    let target: Target;
    let filterManager: FilterManager;

    beforeEach(() => {
      target = new Target();
      filterManager = new FilterManager(target);
    });

    describe("when I add a filter", () => {
      it("should call filter with each request", () => {
        const authFilter = new AuthFilter();
        const permissionFilter = new PermissionFilter();

        filterManager.addFilter(authFilter);
        filterManager.addFilter(permissionFilter);

        filterManager.filterRequest("Test Manager");

        expect(logger.log).toHaveBeenCalledWith("Authentication request: Test Manager");
        expect(logger.log).toHaveBeenCalledWith("Permission request: Test Manager");
      });
    });
  });

  describe("Client", () => {
    let client: Client;

    beforeEach(() => {
      client = new Client();
    });

    describe("when I add a filter", () => {
      fit("should filter all requests", () => {
        const target = new Target();
        const filterManager = new FilterManager(target);
        const authFilter = new AuthFilter();
        const permissionFilter = new PermissionFilter();

        filterManager.addFilter(authFilter);
        filterManager.addFilter(permissionFilter);

        client.setFilterManager(filterManager);

        client.sendRequest("Test Client");

        expect(logger.log).toHaveBeenCalledWith("Authentication request: Test Client");
        expect(logger.log).toHaveBeenCalledWith("Permission request: Test Client");
      });
    });
  });
});
