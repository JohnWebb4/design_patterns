import { logger } from "../util/logger";

abstract class Game {
  public abstract initialize(): void;
  public abstract startPlay(): void;
  public abstract endPlay(): void;

  public play(): void {
    this.initialize();

    this.startPlay();

    this.endPlay();
  }
}

class Cricket extends Game {
  public initialize(): void {
    logger.log("Setting up cricket");
  }

  public startPlay(): void {
    logger.log("Starting cricket");
  }

  public endPlay(): void {
    logger.log("Ending cricket");
  }
}

class Football extends Game {
  public initialize(): void {
    logger.log("Setting up football");
  }

  public startPlay(): void {
    logger.log("Starting football");
  }

  public endPlay(): void {
    logger.log("Ending football");
  }
}
export { Cricket, Football };
