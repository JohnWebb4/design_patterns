import { EmployeeDecorator, James, Tod } from "./decorator";

describe("Decorator Pattern", () => {
  describe("Employee Decorator", () => {
    describe("when I create an emploeyee Tod", () => {
      it("should make an name employee with the name Tod", () => {
        const employeeTod = new EmployeeDecorator(new Tod());

        expect(employeeTod).toEqual({
          name: "Employee Tod",
          person: {
            name: "Tod",
          },
        });
      });
    });

    describe("when I create an employee James", () => {
      it("should make an employee with the name James", () => {
        const employeeJames = new EmployeeDecorator(new James());

        expect(employeeJames).toEqual({
          name: "Employee James",
          person: {
            name: "James",
          },
        });
      });
    });
  });
});
