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
  it("returns true first argument ends with 2nd argument when 2nd argument length is 2", () => {
    const stringChecker = new StringChecker();
    expect(stringChecker.solution("abc", "bc")).toBe(true);
  });
  it("returns true first argument ends with 2nd argument when 2nd argument length is 3", () => {
    const stringChecker = new StringChecker();
    expect(stringChecker.solution("abcd", "bcd")).toBe(true);
  });
});
