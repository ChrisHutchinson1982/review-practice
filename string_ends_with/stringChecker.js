class StringChecker {
  solution(str, ending) {
    const endingLength = ending.length;
    if (endingLength === 0) {
      return true;
    } else {
      return str.slice(-endingLength) === ending;
    }
  }
}

module.exports = StringChecker;
