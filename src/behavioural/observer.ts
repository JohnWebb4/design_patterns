import { logger } from "../util/logger";

class Subject {
  /* tslint:disable-next-line variable-name */
  private _state: number;

  private observers: Observer[] = [];

  get state(): number {
    return this._state;
  }

  set state(newState: number) {
    this._state = newState;
    this.notify();
  }

  public attach(observer: Observer) {
    this.observers.push(observer);
  }

  public notify() {
    this.observers.forEach((observer) => observer.update());
  }
}

abstract class Observer {
  protected subject: Subject;

  public abstract update(): void;
}

class BlueJayObserver extends Observer {
  public constructor(subject: Subject) {
    super();

    this.subject = subject;
    this.subject.attach(this);
  }

  public update() {
    logger.log(`Blue Jays: ${this.subject.state}`);
  }
}

class SparrowObserver extends Observer {
  public constructor(subject: Subject) {
    super();

    this.subject = subject;
    this.subject.attach(this);
  }

  public update() {
    logger.log(`Sparrows: ${this.subject.state}`);
  }
}

class HummingBirdObserver extends Observer {
  public constructor(subject: Subject) {
    super();

    this.subject = subject;
    this.subject.attach(this);
  }

  public update() {
    logger.log(`Hummingbirds: ${this.subject.state}`);
  }
}

export { BlueJayObserver, HummingBirdObserver, SparrowObserver, Subject };
