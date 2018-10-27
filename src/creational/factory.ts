import { logger } from "../util/logger";

interface IShape {
  draw: () => void;
}

enum ShapeTypes {
  Rectangle = "rectangle",
  Square = "square",
}

class Rectangle implements IShape {
  public draw(): void {
    logger.log("A Rectangle");
  }
}

class Square implements IShape {
  public draw(): void {
    logger.log("A Square");
  }
}

class ShapeFactory {
  public getShape(type: string): IShape {
    if (type === ShapeTypes.Rectangle) {
      return new Rectangle();
    } else if (type === ShapeTypes.Square) {
      return new Square();
    }

    return null;
  }
}

export {
  IShape,
  Rectangle,
  ShapeFactory,
  ShapeTypes,
  Square,
};
