import { logger } from "../util/logger";

interface IAction {
  doAction: (name: string, description: string) => void;
}

class JumpAction implements IAction {
  public doAction(name: string, description: string) {
    logger.log(`${name} jumped: ${description}`);
  }
}

class RunAction implements IAction {
  public doAction(name: string, description: string) {
    logger.log(`${name} ran: ${description}`);
  }
}

abstract class Actionable {
  private action: IAction;

  constructor(action: IAction) {
    this.action = action;
  }

  public doAction(name: string, description: string) {
    this.action.doAction(name, description);
  }
}

class Person extends Actionable {
  public name: string;

  constructor(name: string, action: IAction) {
    super(action);

    this.name = name;
  }

  public doAction(description: string) {
    super.doAction(this.name, description);
  }
}

export {
  JumpAction,
  Person,
  RunAction,
};
