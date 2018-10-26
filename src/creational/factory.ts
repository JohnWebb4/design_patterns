interface IShape {
  draw: () => void;
}

enum ShapeTypes {
  Rectangle = "rectangle",
  Square = "square",
}

class Rectangle implements IShape {
  draw(): void {
    console.log('A Rectangle');
  }
}

class Square implements IShape {
  draw(): void {
    console.log('A Square');
  }
}

class ShapeFactory {
  getShape(type: string): IShape {
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
  Square
};
