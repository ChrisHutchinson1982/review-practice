const arrayDiff = require("./arrayDiff");

describe("Remove all values from list that are present in list b keeping their order", () => {
  it("Output [2] when input is [1,2], [1]", () => {
    expect(arrayDiff([1, 2], [1])).toEqual([2]);
  });
  it("Output [1] when input is [1,2], [2]", () => {
    expect(arrayDiff([1, 2], [2])).toEqual([1]);
  });
  it("Output [1,2] when input is [1,2], [3]", () => {
    expect(arrayDiff([1, 2], [3])).toEqual([1, 2]);
  });
  it("Output [2,2] when input is [1,2,2], [1]", () => {
    expect(arrayDiff([1, 2, 2], [1])).toEqual([2, 2]);
  });
  it("Output [1] when input is [1,2,2], [2]", () => {
    expect(arrayDiff([1, 2, 2], [1])).toEqual([2, 2]);
  });
  it("Output [1,2,2] when input is [1,2,2], [3]", () => {
    expect(arrayDiff([1, 2, 2], [3])).toEqual([1, 2, 2]);
  });
  it("Output [1,2,2] when input is [1,2,2], []", () => {
    expect(arrayDiff([1, 2, 2], [])).toEqual([1, 2, 2]);
  });
});
