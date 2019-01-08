import { DogBO, DogVO } from "./transferObject";

describe("Transfer Object Pattern", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("DogBO", () => {
    let dogBO: DogBO;

    beforeEach(() => {
      dogBO = new DogBO();
    });

    describe("when I get all students", () => {
      it("should return all dogs", () => {
        expect(dogBO.getAllDogs()).toEqual([
          {
            _breed: "Beagle",
            _name: "Rex",
          },
          {
            _breed: "Golden Retriever",
            _name: "Tiger",
          },
        ]);
      });
    });

    describe("when I get a dog by name", () => {
      describe("when the dog exists", () => {
        it("should return the dog", () => {
          expect(dogBO.getDogByName("Rex")).toEqual({
            _breed: "Beagle",
            _name: "Rex",
          });
        });
      });

      describe("when the dog does not exist", () => {
        it("should return null", () => {
          expect(dogBO.getDogByName("Tod")).toEqual(null);
        });
      });
    });

    describe("when I delete a dog", () => {
      it("should delete the dog", () => {
        dogBO.deleteDog(dogBO.getAllDogs()[0]);

        expect(dogBO.getAllDogs()).toEqual([
          {
            _breed: "Golden Retriever",
            _name: "Tiger",
          },
        ]);
      });
    });

    describe("when I update a dog", () => {
      it("should update the dog", () => {
        dogBO.updateDog(new DogVO("Rex", "Poodle"));

        expect(dogBO.getAllDogs()).toEqual([
          {
            _breed: "Poodle",
            _name: "Rex",
          },
          {
            _breed: "Golden Retriever",
            _name: "Tiger",
          },
        ]);
      });
    });
  });
});
