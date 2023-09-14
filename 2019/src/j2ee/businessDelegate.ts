import { logger } from "../util/logger";

interface IPetService {
  process: () => void;
}

class DogWashingService implements IPetService {
  public process(): void {
    logger.log("Started Dog Washing Service");
  }
}

class DogWalkingService implements IPetService {
  public process(): void {
    logger.log("Started Dog Walking Service");
  }
}

class PetServiceLookup {
  public getPetService(serviceType: string) {
    const lowerServiceType = serviceType.toLocaleLowerCase();

    if (lowerServiceType === "dog washing") {
      return new DogWashingService();
    } else if (lowerServiceType === "dog walking") {
      return new DogWalkingService();
    }
  }
}

class PetServiceDelegate {
  public lookupService = new PetServiceLookup();
  public petService: IPetService;
  public serviceType: string;

  public setServiceType(serviceType: string) {
    this.serviceType = serviceType;
  }

  public doTask() {
    this.petService = this.lookupService.getPetService(this.serviceType);
    this.petService.process();
  }
}

class Client {
  private petService: PetServiceDelegate;

  constructor(petService: PetServiceDelegate) {
    this.petService = petService;
  }

  public doTask() {
    this.petService.doTask();
  }
}

export { Client, PetServiceDelegate };
