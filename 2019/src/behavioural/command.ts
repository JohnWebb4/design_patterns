import { logger } from "../util/logger";

interface ICommand {
  execute: () => void;
}

class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public run() {
    logger.log(`${this.name} ran`);
  }

  public jump() {
    logger.log(`${this.name} jumped`);
  }

  public dance() {
    logger.log(`${this.name} danced`);
  }
}

class Run implements ICommand {
  protected person: Person;

  constructor(person: Person) {
    this.person = person;
  }

  public execute() {
    this.person.run();
  }
}

class Jump implements ICommand {
  protected person: Person;

  constructor(person: Person) {
    this.person = person;
  }

  public execute() {
    this.person.jump();
  }
}

class Dance implements ICommand {
  protected person: Person;

  constructor(person: Person) {
    this.person = person;
  }

  public execute() {
    this.person.dance();
  }
}

class Manager {
  public commands: ICommand[] = [];

  public add(command: ICommand) {
    this.commands.push(command);
  }

  public handleCommands() {
    this.commands.forEach((command: ICommand) => {
      command.execute();
    });

    this.commands = [];
  }
}

export { Dance, Jump, Manager, Person, Run };
