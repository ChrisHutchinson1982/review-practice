class DiamondMaker {
  diamond(n) {
    if (n % 2 === 0 || n < 0) {
      return null;
    }

    let diamondString = "";
    let middleRow = n / 2 + 0.5;

    for (let row = 1; row <= n; row++) {
      let spaces = Math.abs(row - middleRow);
      let gap = " ".repeat(spaces);
      let diamonds = "*".repeat(n - spaces * 2);

      let diamondRow = gap + diamonds + "\n";
      diamondString += diamondRow;
    }

    return diamondString;
  }
}

module.exports = DiamondMaker;
