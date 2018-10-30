import { logger } from "../util/logger";
import { CajunFries, EverythingBurger, Meal, MealBuilder } from "./builder";

jest.mock("../util/logger", () => ({
  logger: {
    log: jest.fn(),
  },
}));

describe("Builder", () => {

  describe("Meal Builder", () => {
    let mealBuilder: MealBuilder;

    beforeEach(() => {
      mealBuilder = new MealBuilder();
    });
    it("should create a double wonder meal", () => {
      const meal = mealBuilder.prepareDoubleWonderMeal();

      expect(meal).toMatchSnapshot();
    });

    it("should create spicy meal", () => {
      const meal = mealBuilder.prepareSpicyMeal();

      expect(meal).toMatchSnapshot();
    });

    it("should add food to order", () => {
      const meal = mealBuilder.prepareDoubleWonderMeal();

      meal.orderFood(new CajunFries());

      expect(meal).toMatchSnapshot();
    });
  });

  describe("Cajun Fries", () => {
    let cajunFries: CajunFries;

    beforeEach(() => {
      cajunFries = new CajunFries();
    });

    describe("when preparing meal", () => {
      it("should return preparable", () => {
        expect(cajunFries.prepare()).toMatchSnapshot();
      });

      it("should return served when called", () => {
        expect(cajunFries.prepare().prepare()).toEqual("Served");
      });
    });

  });

  describe("Everything Burger", () => {
    let everythingBurger: EverythingBurger;

    beforeEach(() => {
      everythingBurger = new EverythingBurger();
    });

    describe("when preparing meal", () => {
      it("should return preparable", () => {
        expect(everythingBurger.prepare()).toMatchSnapshot();
      });

      it("should return cooked when called", () => {
        expect(everythingBurger.prepare().prepare()).toEqual("Cooked");
      });
    });
  });

  describe("Meal", () => {
    let meal: Meal;
    let mealBuilder: MealBuilder;

    beforeEach(() => {
      mealBuilder = new MealBuilder();
      meal = mealBuilder.prepareDoubleWonderMeal();
    });

    describe("Get Price", () => {
      it("should sum items for meal price", () => {
        expect(meal.getPrice()).toEqual(9);
      });
    });

    describe("List items", () => {
      it("should list items", () => {
        meal.listMeal();

        expect(logger.log).toHaveBeenCalledWith("Food: Curly Fries, Cost: 3");
        expect(logger.log).toHaveBeenCalledWith("Food: Double Burger, Cost: 6");
      });
    });
  });
});
