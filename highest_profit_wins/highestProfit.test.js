const HighestProfit = require("./highestProfit");

describe("returns both the minimum and maximum number", () => {
  it("when input is  [1,2] returns  [1,2]", () => {
    const highestProfit = new HighestProfit();
    expect(highestProfit.getMinAndMaxValues([1, 2])).toEqual([1, 2]);
  });
  it("when input is  [1,5] returns  [1,5]", () => {
    const highestProfit = new HighestProfit();
    expect(highestProfit.getMinAndMaxValues([1, 5])).toEqual([1, 5]);
  });
  it("when input is  [[1,2,3] returns  [1,3]", () => {
    const highestProfit = new HighestProfit();
    expect(highestProfit.getMinAndMaxValues([1, 2, 3])).toEqual([1, 3]);
  });
});
