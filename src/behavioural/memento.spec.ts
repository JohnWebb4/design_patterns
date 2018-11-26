import { CareTaker, Memento, Originator } from "./memento";

describe("Memento Pattern", () => {
  describe("Originator", () => {
    let originator: Originator;

    beforeEach(() => {
      originator = new Originator();
    });

    describe("when I save state to memento", () => {
      it("should create memento", () => {
        originator.state = "State 1";

        expect(originator.saveToMemento()).toEqual({
          state: "State 1",
        });
      });
    });

    describe("when I get state from a memento", () => {
      it("should update originator state", () => {
        const memento: Memento = new Memento("State 1");

        originator.getStateFromMemento(memento);

        expect(originator).toEqual({
          state: "State 1",
        });
      });
    });
  });

  describe("Care Taker", () => {
    let careTaker: CareTaker;

    beforeEach(() => {
      careTaker = new CareTaker();
    });

    describe("when I add a memento", () => {
      it("should update state states", () => {
        const memento: Memento = new Memento("State 1");

        careTaker.add(memento);

        expect(careTaker).toEqual({
          mementos: [
            {
              state: "State 1",
            },
          ],
        });
      });
    });

    describe("when I add several mementos", () => {
      it("should maintain order added to array", () => {
        const memento1: Memento = new Memento("State 1");
        const memento2: Memento = new Memento("State 2");

        careTaker.add(memento1);
        careTaker.add(memento2);

        expect(careTaker).toEqual({
          mementos: [
            {
              state: "State 1",
            },
            {
              state: "State 2",
            },
          ],
        });
      });
    });

    describe("when I get a memento by index", () => {
      it("should return the memento", () => {
        const memento1: Memento = new Memento("State 1");
        const memento2: Memento = new Memento("State 2");
        const memento3: Memento = new Memento("State 3");

        careTaker.add(memento1);
        careTaker.add(memento2);
        careTaker.add(memento3);

        expect(careTaker.get(0)).toBe(memento1);
        expect(careTaker.get(1)).toBe(memento2);
        expect(careTaker.get(2)).toBe(memento3);
      });
    });
  });
});
