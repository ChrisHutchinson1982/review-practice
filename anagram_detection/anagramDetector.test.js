const AnagramDetector = require("./anagramDetector");

describe("anagramDetector", () => {
  it("return true when identical", () => {
    const anagramDetector = new AnagramDetector();
    expect(anagramDetector.isAnagram("word", "word")).toBe(true);
  });
});
