/* tslint:disable:no-console */

class Logger {
  public static instance() {
    return this.logger;
  }

  private static logger = new Logger();

  private constructor() {}

  public log(...params: any[]) {
    console.log(...params);
  }
}

const logger = Logger.instance();

export { logger };
