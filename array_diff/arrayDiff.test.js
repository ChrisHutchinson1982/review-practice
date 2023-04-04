const arrayDiff = require("./arrayDiff");

describe("Remove all values from list that are present in list b keeping their order", () => {
  it("Outputs [2] when input is [1,2], [1] ", () => {
    expect(arrayDiff([1, 2])).toEqual([1]);
  });
});
