class DiamondMaker {
  diamond(n) {
    if (n % 2 === 0 || n < 0) {
      return null;
    }

    let diamondString = "";
    let diamonds = "*";
    let middleRow = n / 2 + 0.5;

    for (let row = 1; row <= n; row++) {
      let spaces = " ".repeat(Math.abs(row - middleRow));
      let diamondRow = spaces + diamonds + "\n";

      diamondString += diamondRow;

      row < middleRow ? (diamonds += "**") : (diamonds = diamonds.slice(0, -2));
    }

    return diamondString;
  }
}

module.exports = DiamondMaker;
