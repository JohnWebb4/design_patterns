class Memento {
  public readonly state: string;

  constructor(state: string) {
    this.state = state;
  }
}

class Originator {
  public state: string;

  public getStateFromMemento(memento: Memento): void {
    this.state =  memento.state;
  }

  public saveToMemento(): Memento {
    return new Memento(this.state);
  }
}

class CareTaker {
  private mementos: Memento[];

  constructor() {
    this.mementos = [];
  }

  public add(state: Memento): void {
    this.mementos.push(state);
  }

  public get(index: number): Memento {
    return this.mementos[index];
  }
}

export { CareTaker, Memento, Originator };
