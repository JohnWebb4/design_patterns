class Employee {
  public name: string;
  public subordinates: Employee[];

  constructor(name: string, subordinates: Employee[] = []) {
    this.name = name;
    this.subordinates = subordinates;
  }

  public add(employee: Employee) {
    this.subordinates.push(employee);
  }

  public remove(employee: Employee) {
    const index = this.subordinates.indexOf(employee);

    if (index >= 0) {
      this.subordinates.splice(index, 1);
    }
  }

  public listSubordinates() {
    return `${this.name} has subordinates: ${this.subordinates.map((employee) => employee.name).join(", ")}`;
  }
}

export { Employee };
