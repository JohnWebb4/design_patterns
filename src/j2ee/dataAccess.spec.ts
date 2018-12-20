import { Sword, SwordDAO } from "./dataAccess";

describe("Data Access Pattern", () => {
  describe("SwordDAO", () => {
    let swordDAO: SwordDAO;

    beforeEach(() => {
      swordDAO = new SwordDAO();
    });

    describe("when I get all swords", () => {
      it("should return all swords", () => {
        expect(swordDAO.getAllSwords()).toEqual([
          {
            name: "Excalibur",
            strength: 100,
            swordID: 0,
          },
          {
            name: "Dragon's Breath",
            strength: 50,
            swordID: 1,
          },
        ]);
      });
    });

    describe("when I get a specific sword", () => {
      it("should return that specific sword", () => {
        expect(swordDAO.getSword(0)).toEqual({
          name: "Excalibur",
          strength: 100,
          swordID: 0,
        });
      });
    });

    describe("when I delete a sword", () => {
      it("should remove the sword", () => {
        swordDAO.deleteSword(new Sword("Excalibur", 0, 100));

        expect(swordDAO.getAllSwords()).toEqual([
          {
            name: "Dragon's Breath",
            strength: 50,
            swordID: 1,
          },
        ]);
      });
    });

    describe("when I update a sword", () => {
      it("should update the sword", () => {
        swordDAO.updateSword(new Sword("Bill's Sword", 0, 1000));

        expect(swordDAO.getAllSwords()).toEqual([
          {
            name: "Bill's Sword",
            strength: 1000,
            swordID: 0,
          },
          {
            name: "Dragon's Breath",
            strength: 50,
            swordID: 1,
          },
        ]);

      });
    });
  });
});
