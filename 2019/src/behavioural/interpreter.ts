interface IExpression {
  interprete: (context: string) => boolean;
}

class TerminalExpression {
  private data: string;

  constructor(data: string) {
    this.data = data;
  }

  public interprete(context: string): boolean {
    if (context.includes(this.data)) {
      return true;
    }

    return false;
  }
}

class OrExpression implements IExpression {
  private exp1: IExpression;
  private exp2: IExpression;

  constructor(exp1: IExpression, exp2: IExpression) {
    this.exp1 = exp1;
    this.exp2 = exp2;
  }

  public interprete(context: string): boolean {
    return this.exp1.interprete(context) || this.exp2.interprete(context);
  }
}

class AndExpression implements IExpression {
  private exp1: IExpression;
  private exp2: IExpression;

  constructor(exp1: IExpression, exp2: IExpression) {
    this.exp1 = exp1;
    this.exp2 = exp2;
  }

  public interprete(context: string): boolean {
    return this.exp1.interprete(context) && this.exp2.interprete(context);
  }
}

export { AndExpression, OrExpression, TerminalExpression };
