# Design Patterns

Implementing Different Design Patterns

This implements the 23 design patterns apart of the _Gang of Four_

| Pattern   | Classification | Implemented |
| -------   | -------------- | ----------- |
| Factory   |   Creational   |     Yes     |
| Singleton |   Creational   |     Yes     |

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

## Structural

Class and object implementation and inheritance. Composition of classes
to achieve new features.

## Behavioural

How object interact and behave together.

## J2EE

How data objects are presented, and the related design patterns.

## License

[MIT](/LICENSE)

## Contributing

See [Contributing](/CONTRIBUTING.md)
