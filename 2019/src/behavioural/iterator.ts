interface IIterator<T> {
  hasNext(): boolean;
  next(): T;
}

interface IContainer<T> {
  getIterator(): IIterator<T>;
}

const names: string[] = ["A", "B", "C"];

class NameIterator implements IIterator<string> {
  protected index: number = 0;

  public hasNext(): boolean {
    return this.index < names.length;
  }
  public next(): string {
    return names[this.index++];
  }
}

class NameRepository implements IContainer<string> {
  public getIterator(): IIterator<string> {
    return new NameIterator();
  }
}

export { NameRepository };
