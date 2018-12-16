import { Context, OperationAdd, OperationMultiply, OperationSubtract } from "./strategy";

describe("Strategy Pattern", () => {
  describe("Context", () => {
    describe("when I set a strategy", () => {
      it("should do that strategy", () => {
        const context = new Context(new OperationAdd());

        expect(context.executeStrategy(1, 2)).toEqual(3);
      });
    });

    describe("when I change strategies", () => {
      it("should change the executed operation", () => {
        let context = new Context(new OperationMultiply());

        expect(context.executeStrategy(2, 3)).toEqual(6);

        context = new Context(new OperationSubtract());

        expect(context.executeStrategy(3, 4)).toEqual(-1);
      });
    });
  });
});
