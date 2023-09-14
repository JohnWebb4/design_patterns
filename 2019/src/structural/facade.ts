import { logger } from "../util/logger";

interface IShape {
  draw: () => void;
}

class Rectangle implements IShape {
  public draw() {
    logger.log("Rectangle");
  }
}

class Square implements IShape {
  public draw() {
    logger.log("Square");
  }
}

class Circle implements IShape {
  public draw() {
    logger.log("Circle");
  }
}

class ShapeMaker {
  private circle: IShape;
  private rectangle: IShape;
  private square: IShape;

  constructor() {
    this.circle = new Circle();
    this.rectangle = new Rectangle();
    this.square = new Square();
  }

  public drawCircle() {
    return this.circle.draw();
  }

  public drawRectangle() {
    return this.rectangle.draw();
  }

  public drawSquare() {
    return this.square.draw();
  }
}

export { ShapeMaker };
