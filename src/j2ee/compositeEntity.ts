import { logger } from "../util/logger";

enum EnvironmentEntityStates {
  ON = 1,
  OFF = 0,
}

class Thunder {
  public readonly NAME = "Thunder";
  private state: EnvironmentEntityStates;

  public getInformation() {
    return {
      name: this.NAME,
      state: this.state,
    };
  }

  public setState(state: EnvironmentEntityStates) {
    this.state = state;
  }
}

class Lightning {
  public readonly NAME = "Lightning";
  private state: EnvironmentEntityStates;

  public getInformation() {
    return {
      name: this.NAME,
      state: this.state,
    };
  }

  public setState(state: EnvironmentEntityStates) {
    this.state = state;
  }
}

class EnvironmentObject {
  public lightning = new Lightning();
  public thunder = new Thunder();

  public setState(lightningState: EnvironmentEntityStates, thunderState: EnvironmentEntityStates) {
    this.lightning.setState(lightningState);
    this.thunder.setState(thunderState);
  }

  public getInformation() {
    return [ this.lightning.getInformation(), this.thunder.getInformation() ];
  }
}

class Environment {
  protected environmentObject = new EnvironmentObject();

  public setState(lightningState: EnvironmentEntityStates, thunderState: EnvironmentEntityStates) {
    this.environmentObject.setState(lightningState, thunderState);
  }

  public getState() {
    return this.environmentObject.getInformation();
  }
}

class NatureClient {
  private environment: Environment = new Environment();

  public printForecast() {
    const environmentData = this.environment.getState();

    environmentData.forEach((entityInformation) => {
      logger.log(`${entityInformation.name}: ${entityInformation.state}`);
    });
  }

  public setEnvironment(lightningState: EnvironmentEntityStates, thunderState: EnvironmentEntityStates) {
    this.environment.setState(lightningState, thunderState);
  }
}

export { EnvironmentEntityStates, NatureClient };
