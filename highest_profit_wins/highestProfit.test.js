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
  it("when input is  [1,2,3] returns  [1,3]", () => {
    const highestProfit = new HighestProfit();
    expect(highestProfit.getMinAndMaxValues([1, 2, 3])).toEqual([1, 3]);
  });
  it("when input is  [1,2,5] returns  [1,5]", () => {
    const highestProfit = new HighestProfit();
    expect(highestProfit.getMinAndMaxValues([1, 2, 5])).toEqual([1, 5]);
  });
  it("when input is  [2,1,3]  returns  [1,3]", () => {
    const highestProfit = new HighestProfit();
    expect(highestProfit.getMinAndMaxValues([2, 1, 3])).toEqual([1, 3]);
  });
  it("when input is  [2,1,5]  returns  [1,5]", () => {
    const highestProfit = new HighestProfit();
    expect(highestProfit.getMinAndMaxValues([2, 1, 3])).toEqual([1, 3]);
  });
  it("when input is  [2,1,10,2] returns  [1,10]", () => {
    const highestProfit = new HighestProfit();
    expect(highestProfit.getMinAndMaxValues([2, 1, 10, 2])).toEqual([1, 10]);
  });
  it("when input is  [30,20,30,3] returns  [3,30]", () => {
    const highestProfit = new HighestProfit();
    expect(highestProfit.getMinAndMaxValues([30, 20, 30, 3])).toEqual([3, 30]);
  });
});
