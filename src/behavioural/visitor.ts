import { logger } from "../util/logger";

interface IService {
  accept: (visitor: IServiceVisitor) => void;
}

class SoundService implements IService {
  public accept(visitor: IServiceVisitor) {
    visitor.visit(this);
  }
}

class VideoService implements IService {
  public accept(visitor: IServiceVisitor) {
    visitor.visit(this);
  }
}

class DesktopService implements IService {
  protected services: IService[];

  constructor() {
    this.services = [
      new SoundService(),
      new VideoService(),
    ];
  }

  public accept(visitor: IServiceVisitor) {
    this.services.forEach((service) => {
      visitor.visit(service);
    });

    visitor.visit(this);
  }
}

interface IServiceVisitor {
  visit: (service: IService) => void;
}

class Application implements IServiceVisitor {
  public visitSound(): void {
    logger.log("Subscribing to sound service");
  }
  public visitVideo(): void {
    logger.log("Subscribing to video service");
  }

  public visitDesktop(): void {
    logger.log("Subscribing to desktop service(s)");
  }

  public visit(service: IService): void {
    if (service instanceof SoundService) {
      this.visitSound();
    } else if (service instanceof VideoService) {
      this.visitVideo();
    } else if (service instanceof DesktopService) {
      this.visitDesktop();
    }
  }
}

export { Application, DesktopService, SoundService, VideoService };
