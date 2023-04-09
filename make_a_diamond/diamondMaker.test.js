const DiamondMaker = require("./diamondMaker");

describe("make a diamond", () => {
  let diamondMaker;

  beforeEach(() => {
    diamondMaker = new DiamondMaker();
  });

  describe("return diamond string", () => {
    it("when input 1", () => {
      expect(diamondMaker.diamond(1)).toEqual("*\n");
    });
    it("when input 3", () => {
      expect(diamondMaker.diamond(3)).toEqual(" *\n***\n *\n");
    });
    it("when input 5", () => {
      expect(diamondMaker.diamond(5)).toEqual("  *\n ***\n*****\n ***\n  *\n");
    });
    it("when input 7", () => {
      expect(diamondMaker.diamond(7)).toEqual(
        "   *\n  ***\n *****\n*******\n *****\n  ***\n   *\n"
      );
    });
  });

  describe("return null if even number", () => {
    it("when input 2", () => {
      expect(diamondMaker.diamond(2)).toEqual(null);
    });
    it("when input 0", () => {
      expect(diamondMaker.diamond(0)).toEqual(null);
    });
    it("when input 4", () => {
      expect(diamondMaker.diamond(2)).toEqual(null);
    });
    it("when input 6", () => {
      expect(diamondMaker.diamond(2)).toEqual(null);
    });
  });

  describe("return null if negative number", () => {
    it("when input -1", () => {
      expect(diamondMaker.diamond(-1)).toEqual(null);
    });
    it("when input -2", () => {
      expect(diamondMaker.diamond(-2)).toEqual(null);
    });
    it("when input -3", () => {
      expect(diamondMaker.diamond(-3)).toEqual(null);
    });
  });
});
