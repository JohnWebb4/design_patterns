import { AndExpression, OrExpression, TerminalExpression } from "./interpreter";

describe("Interpreter Pattern", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("TerminalExpression", () => {
    let terminalExpression: TerminalExpression;

    beforeEach(() => {
      terminalExpression = new TerminalExpression("Data");
    });

    describe("when I pass the correct context", () => {
      it("should return true", () => {
        expect(terminalExpression.interprete("Some Data")).toBe(true);
      });
    });

    describe("when I pass context that it cannot interprete", () => {
      it("shoud return false", () => {
        expect(terminalExpression.interprete("Context")).toBe(false);
      });
    });
  });

  describe("AndExpression", () => {
    let andExpression: AndExpression;

    beforeEach(() => {
      andExpression = new AndExpression(new TerminalExpression("Data"), new TerminalExpression("Another"));
    });

    describe("when I pass the correct context", () => {
      it("should return true", () => {
        expect(andExpression.interprete("Another Data")).toBe(true);
      });
    });

    describe("when I pass context that it cannot interprete", () => {
      it("shoud return false", () => {
        expect(andExpression.interprete("Context")).toBe(false);
      });
    });
  });

  describe("OrExpression", () => {
    let orExpression: OrExpression;

    beforeEach(() => {
      orExpression = new OrExpression(new TerminalExpression("Data"), new TerminalExpression("Another"));
    });

    describe("when I pass the correct context", () => {
      it("should return true", () => {
        expect(orExpression.interprete("Data")).toBe(true);
      });
    });

    describe("when I pass context that it cannot interprete", () => {
      it("shoud return false", () => {
        expect(orExpression.interprete("Context")).toBe(false);
      });
    });
  });
});
