import { CustomerFactory, NullCustomer, RealCustomer } from "./null";

describe("Null Pattern", () => {
  describe("CustomerFactory", () => {
    describe("when retrieving a stored name", () => {
      it("should return a RealCustomer", () => {
        const customer = CustomerFactory.getCustomer("Jack");

        expect(customer).toBeInstanceOf(RealCustomer);
        expect(customer).toEqual({
          name: "Jack",
        });
      });
    });

    describe("when I retrieving a name not stored", () => {
      it("should return a NullCustomer", () => {
        const customer = CustomerFactory.getCustomer("Bad");

        expect(customer).toBeInstanceOf(NullCustomer);
        expect(customer).toEqual({});
      });
    });
  });
});
