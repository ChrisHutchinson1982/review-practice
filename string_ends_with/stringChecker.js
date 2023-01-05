class StringChecker {
  solution(str, ending) {
    const strEnding = str.slice(-ending.length);
    return strEnding === ending;
  }
}

module.exports = StringChecker;
