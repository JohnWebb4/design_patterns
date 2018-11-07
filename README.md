# Design Patterns

Implementing Different Design Patterns

This implements the 23 design patterns apart of the _Gang of Four_

| Pattern   | Classification | Implemented |
| --------- | -------------- | ----------- |
| Factory   | Creational     | Yes         |
| Singleton | Creational     | Yes         |

## Creational

Focus on custom creation logic. This provides great flexibility into
what should actually be created.

### [Factory](/src/creational/factory.ts)

Factory class for instantiating other classes.

- Pros: Great control over what class is instantiated and how it it instantiated.

- Cons: Verbose. A lot of overhead for any simple instantiation.

Use an interface to describe what must be instantiated and returned.

### [Singleton](/src/creational/singleton.ts)

Store a static instance of an object. Any calls fetch the same instance.

- Pros: Methods and properties are shared.

- Cons: Methods and properties are shared.

Great way to create global objects

### [Builder](/src/creational/builder.ts)

Quicky assemble a collection of objects with similar properties.

- Pros:
  - Very fast for making pre-built collections of objects
  - Peform operations on collection of objects

- Cons:
  - Does not work well with very very unique collections
  - All objects must share functionality

Quicky assemble a collection

### [Abstract Factory](/src/creational/abstractFactory.ts)

Quickly create instances of factories

- Pros: Store all classes of factories in one place

- Cons: Every factory inherits every method from abstract Factory. Lots of carry over

Quickly create factories

### [Prototypal](/src/creational/prototypal.ts)

Create clones of original, for avoid heavy instantiations (ex. database references)

- Pros: Only instantiated once. All objects are then clones.

- Cons: All objects are clones of base object. No custom construction.

Factory pattern that returns clones of object

## Structural

Class and object implementation and inheritance. Composition of classes
to achieve new features.

### [Adapter](/src/structural/adapter.ts)

Create adapter to allow one class to support functionality of another

- Pros: Allows class to _adapt_ to support others

- Cons:
  - It is not obvious if a class has been adapted.
  - Overhead of creating an adapter, when a manager class could have decided what to use in the first place.

Adapt a class to support other functionality

### [Bridge](/src/structural/bridge.ts)

Create bridge to decouble abstraction from implementation

- Pros: Abstract and implementation can vary without affecting each other
- Cons: The actual nature of the class is determined at runtime

Code injection of bridge.

### [Filter](/src/structural/filter.ts)

Filter criteria from a collection

- Pros:
  - OOP style filtering of a collection
  - Easy to mix criteria with AND and OR
  - Reusable
- Cons: Verbose OOP style compared to a built in filter

Filter a collection

### [Composite](/src/structural/composite.ts)

Compose a class inside other instances of the same class

- Pros:
  - Easy manipulation of collection elements
  - Class properties are shared with base and composed elements
- Cons: Only works well with One-to-Many Relationship (One instance _owns_ another)

Compose instances of same class

## Behavioural

How object interact and behave together.

## J2EE

How data objects are presented, and the related design patterns.

## License

[MIT](/LICENSE)

## Contributing

See [Contributing](/CONTRIBUTING.md)
