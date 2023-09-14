import { logger } from "../util/logger";

abstract class AbstractLogger {
  public static NONE = 0;
  public static INFO = 1;
  public static WARN = 2;
  public static ERROR = 3;

  public logLevel: number;

  protected nextLogger: AbstractLogger;

  constructor(logLevel: number) {
    this.logLevel = logLevel;
  }

  public next(nextLogger: AbstractLogger): AbstractLogger {
    this.nextLogger = nextLogger;

    return this;
  }

  public log(message: string, logLevel: number): void {
    if (logLevel >= this.logLevel) {
      this.write(message);
    }

    if (logLevel > this.logLevel) {
      this.nextLogger.log(message, logLevel);
    }
  }

  protected abstract write(message: string): void;
}

class InfoLogger extends AbstractLogger {
  constructor() {
    super(AbstractLogger.INFO);
  }

  public write(message: string): void {
    logger.log(`Info: ${message}`);
  }
}

class WarningLogger extends AbstractLogger {
  constructor() {
    super(AbstractLogger.WARN);
  }

  public write(message: string): void {
    logger.log(`Warn: ${message}`);
  }
}

class ErrorLogger extends AbstractLogger {
  constructor() {
    super(AbstractLogger.ERROR);
  }

  public write(message: string): void {
    logger.log(`Error: ${message}`);
  }
}

export { AbstractLogger, ErrorLogger, InfoLogger, WarningLogger };
