interface IThing {
  description: string;
  name: string;
}

interface IAnimal {
  name: string;
  type: string;
}

class Lantern implements IThing {
  public description = "Illumination";
  public name = "Lantern";
}

class Table implements IThing {
  public description = "Holds things";
  public name = "Table";
}

class Dog implements IAnimal {
  public name = "Dog";
  public type = "Mammal";
}

class Snake implements IAnimal {
  public name = "Snake";
  public type = "Reptile";
}

abstract class AbstractFactory {
  public abstract createThing(name: string): IThing;
  public abstract createAnimal(name: string): IAnimal;
}

class ThingFactory extends AbstractFactory {
  public createAnimal(): IAnimal { return null; }
  public createThing(name: string): IThing {
    if (name === "Lantern") {
      return new Lantern();
    } else if (name === "Table") {
      return new Table();
    }

    return null;
  }
}

class AnimalFactory extends AbstractFactory {
  public createAnimal(name: string): IAnimal {
    if (name === "Dog") {
      return new Dog();
    } else if (name === "Snake") {
      return new Snake();
    }

    return null;
  }

  public createThing(): IThing { return null; }
}

class FactoryProducer {
  public static getFactory(name: string): AbstractFactory {
    if (name === "Animal") {
      return new AnimalFactory();
    } else if (name === "Thing") {
      return new ThingFactory();
    }

    return null;
  }
}

export { AnimalFactory, FactoryProducer, ThingFactory };
