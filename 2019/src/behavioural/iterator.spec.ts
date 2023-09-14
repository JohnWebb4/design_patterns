import { NameRepository } from "./iterator";

describe("Iterator Pattern", () => {
  describe("NameRepository", () => {
    let nameRepository: NameRepository;

    beforeEach(() => {
      nameRepository = new NameRepository();
    });

    describe("when I get an iterator", () => {
      it("should return an iterator", () => {
        const iterator = nameRepository.getIterator();

        expect(iterator).toEqual({
          index: 0,
        });
      });
    });

    describe("when I get the next iterator", () => {
      it("should increment the iterator and return the next name", () => {
        const iterator = nameRepository.getIterator();

        expect(iterator.hasNext()).toBe(true);

        expect(iterator.next()).toBe("A");
        expect(iterator.hasNext()).toBe(true);

        expect(iterator.next()).toBe("B");
        expect(iterator.hasNext()).toBe(true);

        expect(iterator.next()).toBe("C");
        expect(iterator.hasNext()).toBe(false);

        expect(iterator.next()).toBe(undefined);
      });
    });
  });
});
