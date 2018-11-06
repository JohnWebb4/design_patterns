import { AndCriteria, CriteriaNameEndsWithN, CriteriaNameStartsWithJ, OrCriteria, Person } from "./filter";

describe("Filter Pattern", () => {
  let people: Person[];

  beforeEach(() => {
    people = [
      new Person("John"),
      new Person("Jay"),
      new Person("Zen"),
      new Person("Tod"),
    ];
  });
  describe("CriteriaNameStartsWithJ", () => {
    it("should only return names starting with J", () => {
      const criteria = new CriteriaNameStartsWithJ();

      expect(criteria.meetCriteria(people)).toEqual([
        new Person("John"),
        new Person("Jay"),
      ]);
    });
  });

  describe("CriteriaNameEndsWithN", () => {
    it("should only return names ending with N", () => {
      const criteria = new CriteriaNameEndsWithN();

      expect(criteria.meetCriteria(people)).toEqual([
        new Person("John"),
        new Person("Zen"),
      ]);
    });
  });

  describe("AndCriteria", () => {
    describe("when a name starts with J and end with N", () => {
      it("should only return names starting with J and ending with N", () => {
        const criteria = new AndCriteria(new CriteriaNameStartsWithJ(), new CriteriaNameEndsWithN());

        expect(criteria.meetCriteria(people)).toEqual([
          new Person("John"),
        ]);
      });
    });
  });

  describe("OrCriteria", () => {
    describe("when a name starts with J or ends with N", () => {
      it("should only return names starting with J or ending with N", () => {
        const criteria = new OrCriteria(new CriteriaNameStartsWithJ(), new CriteriaNameEndsWithN());

        expect(criteria.meetCriteria(people)).toEqual([
          new Person("John"),
          new Person("Jay"),
          new Person("Zen"),
        ]);
      });
    });
  });
});
