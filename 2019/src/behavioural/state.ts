import { logger } from "../util/logger";

interface IState {
  doAction: (context: Context) => void;
}

class Context {
  public state: IState;

  constructor() {
    this.state = null;
  }
}

class StartState implements IState {
  public doAction(context: Context) {
    logger.log("Start Action");
    context.state = this;
  }
}

class StopState implements IState {
  public doAction(context: Context) {
    logger.log("Stop Action");
    context.state = this;
  }
}

export { Context, StartState, StopState };
