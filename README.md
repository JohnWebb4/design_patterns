# Design Patterns

Implementing Different Design Patterns

This implements the 23 design patterns apart of the _Gang of Four_

## Table of Contents

- Creational
  - Factory
  - Singleton
  - Builder
  - Abstract Factory
  - Prototypal
- Structural
  - Adapter
  - Bridge
  - Filter
  - Composite
  - Decorator
  - Facade

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

### [Decorator](/src/structural/decorator.ts)

Augment a class with new functionality

- Pros: Easily add functionality to a class
- Cons: Wraps class with functionality

Wrap class with functionality

### [Facade](/src/structural/facade.ts)

Abstract complexities of a system to a single class

- Pros: Once set up very easy to use
- Cons: Setup involes setting up the entire network in an easy to use way

Simplify a system to a simple class

### [Flyweight](/src/structural/flyweight.ts)

Store instance of a class for reuse

- Pros: Performance and memory savings
- Cons: Similar object are the same instance

Memoize instances of an object for reuse

### [Proxy](/src/structural/proxy.ts)

Create proxy to consolidate high cost operations

- Pros: Reduces high cost operations for efficiency

Reduce high cost operations

## Behavioural

How object interact and behave together.

### [Responsibility](/src/behavioural/responsibility.ts)

Delegate responsibility of one class to another

- Pros: Chain responsibility of handling a call
- Cons: Creating many instances of similar objects to chain functionality

ES6 Promises

### [Command](/src/behavioural/command.ts)

Store commands to be execute at some point in the future

- Pros: Command can be executed when convenient
- Cons: Creating a new class for each command

Store commands

## J2EE

How data objects are presented, and the related design patterns.

## License

[MIT](/LICENSE)

## Contributing

See [Contributing](/CONTRIBUTING.md)
