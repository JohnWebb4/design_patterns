class Singleton {

  public static object = new Singleton("Monocerotis", 10, 1000);

  public static getInstance(): Singleton {
    return this.object;
  }
  public mass: number;
  public name: string;
  public size: number;

  private constructor(name: string, size: number, mass: number) {
    this.mass = mass;
    this.name = name;
    this.size = size;
  }

  public implode(): string {
    const { name } = this;
    return `${name} Boom!`;
  }
}

export { Singleton };
