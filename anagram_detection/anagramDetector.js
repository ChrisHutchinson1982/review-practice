class AnagramDetector {
  isAnagram(test, original) {
    const sortStr = (str) => {
      return str.toLowerCase().split("").sort().join("");
    };

    return sortStr(test) === sortStr(original);
  }
}
module.exports = AnagramDetector;
