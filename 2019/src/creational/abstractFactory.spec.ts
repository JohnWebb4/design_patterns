import { AnimalFactory, FactoryProducer, ThingFactory } from "./abstractFactory";

describe("Abstract Factory Pattern", () => {
  describe("Factory Producer", () => {
    describe("when I pass Animal", () => {
      it("should return a animal factory", () => {
        expect(FactoryProducer.getFactory("Animal")).toBeInstanceOf(AnimalFactory);
      });
    });

    describe("when I pass Thing", () => {
      expect(FactoryProducer.getFactory("Thing")).toBeInstanceOf(ThingFactory);
    });

    describe("when I pass Shape", () => {
      expect(FactoryProducer.getFactory("Shape")).toBe(null);
    });

  });

  describe("Animal Factory", () => {
    let animalFactory: AnimalFactory;

    beforeEach(() => {
      animalFactory = new AnimalFactory();
    });

    describe("when I call Dog", () => {
      it("should return a Dog", () => {
        expect(animalFactory.createAnimal("Dog")).toEqual({
          name: "Dog",
          type: "Mammal",
        });
      });
    });

    describe("when I call Snake", () => {
      it("should return a Snake", () => {
        expect(animalFactory.createAnimal("Snake")).toEqual({
          name: "Snake",
          type: "Reptile",
        });
      });
    });

    describe("when I call Cat", () => {
      it("should return null", () => {
        expect(animalFactory.createAnimal("Cat")).toBe(null);
      });
    });

    describe("when I create a Thing", () => {
      it("should return null", () => {
        expect(animalFactory.createThing()).toBe(null);
      });
    });
  });

  describe("Thing Factory", () => {
    let thingFactory: ThingFactory;

    beforeEach(() => {
      thingFactory = new ThingFactory();
    });

    describe("when I call Lantern", () => {
      it("should create a lantern", () => {
        expect(thingFactory.createThing("Lantern")).toEqual({
          description: "Illumination",
          name: "Lantern",
        });
      });
    });

    describe("when I call Table", () => {
      it("should create a table", () => {
        expect(thingFactory.createThing("Table")).toEqual({
          description: "Holds things",
          name: "Table",
        });
      });
    });

    describe("when I call TV", () => {
      it("should return null", () => {
        expect(thingFactory.createThing("TV")).toBe(null);
      });
    });

    describe("when I create an animal", () => {
      it("should return null", () => {
        expect(thingFactory.createAnimal()).toBe(null);
      });
    });
  });
});
