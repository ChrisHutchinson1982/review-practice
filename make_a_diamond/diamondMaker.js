class DiamondMaker {
  diamond(n) {
    if (n === 2) {
      return null;
    }

    if (n === 1) {
      return "*\n";
    }
  }
}

module.exports = DiamondMaker;
