class StringChecker {
  solution(stringComplete, stringEnd) {
    console.log(stringEnd.length);
    const slicedString = stringComplete.slice(-stringEnd.length);

    return slicedString === stringEnd;
  }
}

module.exports = StringChecker;
