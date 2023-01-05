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
  it("return true when 1st is anagram of 2nd", () => {
    const anagramDetector = new AnagramDetector();
    expect(anagramDetector.isAnagram("foefet", "toffee")).toBe(true);
  });
  it("return true when 2nd is anagram of 1st and case difference", () => {
    const anagramDetector = new AnagramDetector();
    expect(anagramDetector.isAnagram("Buckethead", "DeathCubeK")).toBe(true);
  });
});
