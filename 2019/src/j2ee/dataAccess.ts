class Sword {
  public name: string;
  public swordID: number;
  public strength: number;

  constructor(name: string, swordID: number, strength: number) {
    this.name = name;
    this.swordID = swordID;
    this.strength = strength;
  }
}

interface ISwordDAO {
  deleteSword: (sword: Sword) => void;
  getAllSwords: () => Sword[];
  getSword: (swordID: number) => Sword;
  updateSword: (sword: Sword) => void;
}

class SwordDAO implements ISwordDAO {
  protected swords: Sword[];

  constructor() {
    this.swords = [
      new Sword("Excalibur", 0, 100),
      new Sword("Dragon's Breath", 1, 50),
    ];
  }

  public getSwordIndex(swordID: number) {
    for (let index = 0; index < this.swords.length; index += 1) {
      if (this.swords[index].swordID === swordID) {
        return index;
      }
    }

    return -1;
  }

  public deleteSword(sword: Sword) {
    const index = this.getSwordIndex(sword.swordID);

    if (index === -1) {
      return -1;
    }

    this.swords.splice(index, 1);
  }

  public getAllSwords() {
    return this.swords;
  }

  public getSword(swordID: number) {
    const index = this.getSwordIndex(swordID);

    if (index === -1) {
      return null;
    }

    return this.swords[index];
  }

  public updateSword(sword: Sword) {
    const index = this.getSwordIndex(sword.swordID);

    if (index === -1) {
      return;
    }

    this.swords[index] = sword;
  }
}

export { Sword, SwordDAO };
