abstract class AbstractCustomer {
  public name: string;

  public abstract isNil(): boolean;
}

class RealCustomer extends AbstractCustomer {
  constructor(name: string) {
    super();

    this.name = name;
  }

  public isNil() {
    return false;
  }
}

class NullCustomer extends AbstractCustomer {
  public isNil() {
    return true;
  }
}

class CustomerFactory {
  public static names = [ "Jack", "Joe", "Jill" ];

  public static getCustomer(name: string): AbstractCustomer {
    if (CustomerFactory.names.some((aName) => aName.toLocaleLowerCase() === name.toLocaleLowerCase())) {
      return new RealCustomer(name);
    }

    return new NullCustomer();
  }
}

export { CustomerFactory, NullCustomer, RealCustomer };
