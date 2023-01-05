class AnagramDetector {
  isAnagram(test, original) {
    return test.toLowerCase() === original.toLowerCase();
  }
}

module.exports = AnagramDetector;
