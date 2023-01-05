const AnagramDetector = require("./anagramDetector");

describe("anagramDetector", () => {
  it("return true when identical", () => {
    const anagramDetector = new AnagramDetector();
    expect(anagramDetector.isAnagram("word", "word")).toBe(true);
  });
  it("return false when different", () => {
    const anagramDetector = new AnagramDetector();
    expect(anagramDetector.isAnagram("word", "anotherword")).toBe(false);
  });
  it("return true when same but case difference", () => {
    const anagramDetector = new AnagramDetector();
    expect(anagramDetector.isAnagram("Word", "worD")).toBe(true);
  });
});
