import { Employee } from "./composite";

describe("Composite Pattern", () => {
  describe("Employee", () => {
    let employee: Employee;

    beforeEach(() => {
      employee = new Employee("The Boss");
    });

    describe("when I create an employee", () => {
      it("should create an employee", () => {
        expect(employee).toEqual({
          name: "The Boss",
          subordinates: [],
        });
      });
    });

    describe("when I add subordinates", () => {
      it("should add subordinates", () => {
        employee.add(new Employee("Man 1"));
        employee.add(new Employee("Man 2"));

        expect(employee).toEqual({
          name: "The Boss",
          subordinates: [
            {
              name: "Man 1",
              subordinates: [],
            },
            {
              name: "Man 2",
              subordinates: [],
            },
          ],
        });
      });
    });

    describe("when I remove subordinates", () => {
      it("should remove subordinates", () => {
        const subordinate = new Employee("Man 1");
        const subordinate2 = new Employee("Man 2");

        employee.add(subordinate);
        employee.add(subordinate2);

        employee.remove(subordinate);

        expect(employee).toEqual({
          name: "The Boss",
          subordinates: [
            {
              name: "Man 2",
              subordinates: [],
            },
          ],
        });
      });
    });

    describe("when I attempt to remove a contact that is not a subordinate", () => {
      it("should not remove anything", () => {
        employee.add(new Employee("Man 1"));

        const otherEmployee = new Employee("Man 2");

        employee.remove(otherEmployee);

        expect(employee).toEqual({
          name: "The Boss",
          subordinates: [
            {
              name: "Man 1",
              subordinates: [],
            },
          ],
        });
      });
    });

    describe("when I list employees", () => {
      it("should list employees", () => {
        employee.add(new Employee("Man 1"));
        employee.add(new Employee("Man 2"));

        employee.listSubordinates();

        expect(employee.listSubordinates()).toEqual("The Boss has subordinates: Man 1, Man 2");
      });
    });
  });
});
