import { logger } from "../util/logger";

interface IImage {
  display: () => void;
}

class RealImage implements IImage {
  public fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.loadImage();
  }

  public display(): void {
    logger.log(`Displaying ${this.fileName}`);
  }

  public loadImage(): void {
    logger.log(`Loading ${this.fileName}`);
  }
}

class ProxyImage implements IImage {
  public fileName: string;
  private realImage: RealImage;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  public display(): void {
    if (!this.realImage) {
      this.realImage = new RealImage(this.fileName);
    }

    this.realImage.display();
  }
}

export { ProxyImage };
