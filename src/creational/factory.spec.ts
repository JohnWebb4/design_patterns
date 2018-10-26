import 'jest';

import { ShapeFactory, ShapeTypes, Square, Rectangle } from './factory';

describe('factory pattern', () => {
  describe('when called with a square', () => {
    it('should create a square', () => {
      const shapeFactory = new ShapeFactory();

      const square = shapeFactory.getShape(ShapeTypes.Square);

      expect(square).toBeInstanceOf(Square);
    });
  });

  describe('when called with a rectangle', () => {
    it('should create a rectangle', () => {
      const shapeFactory = new ShapeFactory();

      const rectangle = shapeFactory.getShape(ShapeTypes.Rectangle);

      expect(rectangle).toBeInstanceOf(Rectangle);
    });
  });

  describe('when passed a bad shape', () => {
    it('should return null', () => {
      const shapeFactory = new ShapeFactory();

      const badShape = shapeFactory.getShape('Bad Shape');

      expect(badShape).toBe(null);
    });
  });
});