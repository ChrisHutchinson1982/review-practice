const StringChecker = require("./stringChecker");

describe("check if first argument ends with 2nd argument", () => {
  it("returns true when both identical", () => {
    const stringChecker = new StringChecker();
    expect(stringChecker.solution("ab", "ab")).toBe(true);
  });
  it("returns false when different", () => {
    const stringChecker = new StringChecker();
    expect(stringChecker.solution("abc", "d")).toBe(false);
  });
  it("returns true when ends match and ending length is 2", () => {
    const stringChecker = new StringChecker();
    expect(stringChecker.solution("abc", "bc")).toBe(true);
  });
  it("returns true when ends match and ending length is 3", () => {
    const stringChecker = new StringChecker();
    expect(stringChecker.solution("abcd", "bcd")).toBe(true);
  });
  it("returns true when ends match and ending length is 0", () => {
    const stringChecker = new StringChecker();
    expect(stringChecker.solution("abcd", "")).toBe(true);
  });
});
