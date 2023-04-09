class DiamondMaker {
  diamond(n) {
    if (n % 2 === 0 || n < 0) {
      return null;
    }

    let diamondString = "";
    let diamonds = "*";
    let middleDiamond = n / 2 + 0.5;

    for (let i = 1; i <= n; i++) {
      let spaces = " ".repeat(Math.abs(i - middleDiamond));
      let diamondRow = spaces + diamonds + "\n";

      diamondString += diamondRow;

      i < middleDiamond
        ? (diamonds += "**")
        : (diamonds = diamonds.slice(0, -2));
    }

    return diamondString;
  }
}

module.exports = DiamondMaker;
