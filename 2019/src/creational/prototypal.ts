import { cloneDeep } from "lodash";

abstract class Shape {
  public readonly id: string;
  public readonly type: string;

  constructor(id: string) {
    this.id = id;
  }

  public clone(): any {
    return cloneDeep(this);
  }
}

class Rectangle extends Shape {
  public readonly type: "Rectangle";
}

class Square extends Shape {
  public readonly type: "Square";
}

class Circle extends Shape {
  public readonly type: "Circle";
}

interface IShapeHashTable {
  [id: string]: Shape;
}

class ShapeCache {
  public static getShape(id: string): Shape {
    return ShapeCache.hashTable[id].clone();
  }

  public static loadCache() {
    const circle = new Circle("1");
    this.hashTable[circle.id] = circle;

    const rectangle = new Rectangle("2");
    this.hashTable[rectangle.id] = rectangle;

    const square = new Square("3");
    this.hashTable[square.id] = square;
  }

  private static hashTable: IShapeHashTable = {};
}

export { Circle, Rectangle, ShapeCache, Square };
