interface IPerson {
  name: string;
}

class Tod implements IPerson {
  public name = "Tod";
}

class James implements IPerson {
  public name = "James";
}

abstract class PersonDecorator implements IPerson {
  public name: string;
  protected person: IPerson;

  constructor(person: IPerson) {
    this.person = person;
  }
}

class EmployeeDecorator extends PersonDecorator {
  constructor(person: IPerson) {
    super(person);

    this.name = `Employee ${person.name}`;
  }
}

export {
  EmployeeDecorator,
  James,
  Tod,
};
