import { logger } from "../util/logger";

interface IPrepare {
  prepare: () => string;
  prepareFee: number;
}

interface IFood {
  cost: number;
  name: string;
  prepare: () => IPrepare;
}

class Cookable implements IPrepare {
  public prepareFee = 3;

  public prepare() {
    return "Cooked";
  }
}

class Serveable implements IPrepare {
  public prepareFee = 1;

  public prepare() {
    return "Served";
  }
}

class Burger implements IFood {
  public cost = 4;

  public name = "Burger";

  public prepare() {
    return new Cookable();
  }
}

class FrenchFries implements IFood {
  public cost = 2;

  public name = "French Fries";

  public prepare() {
    return new Serveable();
  }
}

class DoubleBurger extends Burger {
  public cost = 6;

  public name = "Double Burger";
}

class EverythingBurger extends Burger {
  public cost = 5;

  public name = "Everything Burger";
}

class CurlyFries extends FrenchFries {
  public cost = 3;

  public name = "Curly Fries";
}

class CajunFries extends FrenchFries {
  public cost = 3;

  public name = "Cajun Fries";
}

class Meal {
  private food: IFood[] = [];

  public orderFood(food: IFood) {
    return this.food.push(food);
  }

  public getPrice() {
    return this.food.reduce((totalPrice, food) => totalPrice + food.cost, 0);
  }

  public listMeal() {
    this.food.forEach((food) => {
      logger.log(`Food: ${food.name}, Cost: ${food.cost}`);
    });
  }
}

class MealBuilder {
  public prepareDoubleWonderMeal(): Meal {
    const meal = new Meal();

    meal.orderFood(new DoubleBurger());
    meal.orderFood(new CurlyFries());

    return meal;
  }

  public prepareSpicyMeal(): Meal {
    const meal = new Meal();

    meal.orderFood(new EverythingBurger());
    meal.orderFood(new CajunFries());

    return meal;
  }
}

export { CajunFries, CurlyFries, DoubleBurger, EverythingBurger, Meal, MealBuilder };
