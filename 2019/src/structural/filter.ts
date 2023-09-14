class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

interface ICriteria {
  meetCriteria(people: Person[]): Person[];
}

class CriteriaNameStartsWithJ implements ICriteria {
  public meetCriteria(people: Person[]): Person[] {
    return people.filter((person) =>
      person.name.toLocaleLowerCase().startsWith("j"),
    );
  }
}

class CriteriaNameEndsWithN implements ICriteria {
  public meetCriteria(people: Person[]): Person[] {
    return people.filter((person) =>
      person.name.toLocaleLowerCase().endsWith("n"),
    );
  }
}

class AndCriteria implements ICriteria {
  private criteria1: ICriteria;
  private criteria2: ICriteria;

  constructor(criteria1: ICriteria, criteria2: ICriteria) {
    this.criteria1 = criteria1;
    this.criteria2 = criteria2;
  }

  public meetCriteria(people: Person[]): Person[] {
    const peopleMeeting1 = this.criteria1.meetCriteria(people);
    return this.criteria2.meetCriteria(peopleMeeting1);
  }
}

class OrCriteria implements ICriteria {
  private criteria1: ICriteria;
  private criteria2: ICriteria;

  constructor(criteria1: ICriteria, criteria2: ICriteria) {
    this.criteria1 = criteria1;
    this.criteria2 = criteria2;
  }

  public meetCriteria(people: Person[]): Person[] {
    const peopleMeeting1 = this.criteria1.meetCriteria(people);
    const peopleMeeting2 = this.criteria2.meetCriteria(people);

    const meetsBoth = peopleMeeting1.concat(peopleMeeting2);

    return meetsBoth.filter((person, index) => index === meetsBoth.indexOf(person));
  }
}

export {
  AndCriteria,
  CriteriaNameStartsWithJ,
  CriteriaNameEndsWithN,
  OrCriteria,
  Person,
};
