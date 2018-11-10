import { logger } from "../util/logger";

interface IShape {
  draw: () => void;
}

interface IShapeCollection {
  [index: string]: IShape;
}

class Circle implements IShape {
  public color: string;
  public x: number;
  public y: number;

  constructor(color: string) {
    this.color = color;
  }

  public draw() {
    logger.log(`${this.color} circle at (${this.x}, ${this.y})`);
  }
}

class ShapeFactory {
  public static shapes: IShapeCollection = {};

  public getCircle(color: string): Circle {
    let circle = ShapeFactory.shapes[color] as Circle;

    if (!circle) {
      circle = new Circle(color);

      ShapeFactory.shapes[color] = circle;
    }

    return circle;
  }
}

export { ShapeFactory };
