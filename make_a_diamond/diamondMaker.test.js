const DiamondMaker = require("./diamondMaker");

describe("make a diamond", () => {
  describe("return null if even number", () => {
    it("when input 2", () => {
      const diamondMaker = new DiamondMaker();
      expect(diamondMaker.diamond(2)).toEqual(null);
    });
    xit("when input 4", () => {
      const diamondMaker = new DiamondMaker();
      expect(diamondMaker.diamond(2)).toEqual(null);
    });
    xit("when input 6", () => {
      const diamondMaker = new DiamondMaker();
      expect(diamondMaker.diamond(2)).toEqual(null);
    });
  });
});
