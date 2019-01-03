import { logger } from "../util/logger";

interface IFilter {
  execute(request: string): void;
}

class AuthFilter implements IFilter {
  public execute(request: string): void {
    logger.log(`Authentication request: ${request}`);
  }
}

class PermissionFilter implements IFilter {
  public execute(request: string): void {
    logger.log(`Permission request: ${request}`);
  }
}

class Target {
  public execute(request: string): void {
    logger.log(`Executing: ${request}`);
  }
}

class FilterChain implements IFilter {
  protected filters: IFilter[] = [];
  protected target: Target;

  public execute(request: string): void {
    for (const filter of this.filters) {
      filter.execute(request);
    }

    this.target.execute(request);
  }

  public addFilter(filter: IFilter) {
    this.filters.push(filter);
  }

  public setTarget(target: Target) {
    this.target = target;
  }
}

class FilterManager {
  protected filterChain: FilterChain;

  public constructor(target: Target) {
    this.filterChain = new FilterChain();

    this.filterChain.setTarget(target);
  }

  public addFilter(filter: IFilter): void {
    this.filterChain.addFilter(filter);
  }

  public filterRequest(request: string): void {
    this.filterChain.execute(request);
  }
}

class Client {
  protected filterManager: FilterManager;

  public setFilterManager(filterManager: FilterManager): void {
    this.filterManager = filterManager;
  }

  public sendRequest(request: string): void {
    this.filterManager.filterRequest(request);
  }
}

export { AuthFilter, Client, FilterManager, PermissionFilter, Target };
