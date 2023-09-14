interface IStrategy {
  doOperation: (num1: number, num2: number) => number;
}

class OperationSubtract implements IStrategy {
  public doOperation(num1: number, num2: number): number {
    return num1 - num2;
  }
}

class OperationAdd implements IStrategy {
  public doOperation(num1: number, num2: number): number {
    return num1 + num2;
  }
}

class OperationMultiply implements IStrategy {
  public doOperation(num1: number, num2: number): number {
    return num1 * num2;
  }
}

class Context {
  public strategy: IStrategy;

  constructor(strategy: IStrategy) {
    this.strategy = strategy;
  }

  public executeStrategy(num1: number, num2: number): number {
    return this.strategy.doOperation(num1, num2);
  }
}

export { Context, OperationAdd, OperationMultiply, OperationSubtract };
