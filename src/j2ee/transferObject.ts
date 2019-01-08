// Value Object (Data Transfer Object)
class DogVO {
  // tslint:disable-next-line variable-name
  private _name: string;

  // tslint:disable-next-line variable-name
  private _breed: string;

  public get name(): string {
    return this._name;
  }

  public set name(aName: string) {
    this._name = aName;
  }

  public get breed(): string {
    return this._breed;
  }

  public set breed(aBreed: string) {
    this._breed = aBreed;
  }

  public constructor(name: string, breed: string) {
    this._name = name;
    this._breed = breed;
  }
}

// Business Object
class DogBO {
  private dogs: DogVO[] = [
    new DogVO("Rex", "Beagle"),
    new DogVO("Tiger", "Golden Retriever"),
  ];

  public deleteDog(dog: DogVO) {
    const indexDog = this.dogs.indexOf(dog);

    if (indexDog >= 0) {
      this.dogs.splice(indexDog, 1);
    }
  }

  public getAllDogs(): DogVO[] {
    return this.dogs;
  }

  public getDogByName(name: string): DogVO {
    for (const dog of this.dogs) {
      if (dog.name === name) {
        return dog;
      }
    }

    return null;
  }

  public updateDog(dog: DogVO) {
    for (let dogIndex = 0; dogIndex < this.dogs.length; dogIndex += 1) {
      if (dog.name === this.dogs[dogIndex].name) {
        this.dogs[dogIndex] = dog;
        return;
      }
    }
  }
}

export { DogBO, DogVO };
