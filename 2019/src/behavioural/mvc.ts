import { logger } from "../util/logger";

class Dog {
  public name: string;
  public breed: string;
}

class DogView {
  public printLicenseInformation(dogName: string, dogBreed: string) {
    logger.log(`Dog:\n\tname: ${dogName}\n\tbreed: ${dogBreed}`);
  }
}

class DogController {
  private dog: Dog;
  private dogView: DogView;

  constructor(dog: Dog, dogView: DogView) {
    this.dog = dog;
    this.dogView = dogView;
  }

  public getDogBreed() {
    return this.dog.breed;
  }

  public setDogBreed(breed: string): void {
    this.dog.breed = breed;
  }

  public getDogName() {
    return this.dog.name;
  }

  public setDogName(name: string): void {
    this.dog.name = name;
  }

  public updateView(): void {
    this.dogView.printLicenseInformation(this.dog.name, this.dog.breed);
  }
}

export { Dog, DogController, DogView };
