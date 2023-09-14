import { logger } from "../util/logger";

interface IService {
  execute(): void;
  getName(): string;
}

enum ServiceTypes {
  DATABASE_SERVICE = "DATABASE_SERVICE",
  URL_SERVICE= "URL_SERVICE",
}

class UrlService implements IService {
  public execute(): void {
    logger.log("Starting Url Service");
  }

  public getName() {
    return ServiceTypes.URL_SERVICE;
  }
}

class DatabaseService implements IService {
  public execute(): void {
    logger.log("Starting Database Service");
  }

  public getName() {
    return ServiceTypes.DATABASE_SERVICE;
  }
}

class Context {
  public lookup(name: string): IService {
    const upperName = name.toLocaleUpperCase();

    if (upperName === ServiceTypes.URL_SERVICE) {
      logger.log("Looking up new URL Service");
      return new UrlService();
    } else if (upperName === ServiceTypes.DATABASE_SERVICE) {
      logger.log("Looking up new Database Service");
      return new DatabaseService();
    }

    return null;
  }
}

class Cache {
  private services: IService[] = [];

  public addService(service: IService): void {
    for (const aService of this.services) {
      if (service.getName().toLocaleUpperCase() === aService.getName().toLocaleUpperCase()) {
        return;
      }
    }

    this.services.push(service);
  }

  public getService(serviceName: string): IService {
    for (const service of this.services) {
      if (service.getName().toLocaleUpperCase() === serviceName.toLocaleUpperCase()) {
        logger.log(`Returning cached service: ${service.getName()}`);
        return service;
      }
    }

    return null;
  }
}

class ServiceLocator {
  public static cache: Cache = new Cache();

  public static getService(name: string): IService {
    let service = this.cache.getService(name);

    if (service) {
      return service;
    }

    const context = new Context();
    service = context.lookup(name);

    if (service) {
      this.cache.addService(service);
    }

    return service;
  }
}

export { Cache, DatabaseService, ServiceLocator, ServiceTypes, UrlService };
