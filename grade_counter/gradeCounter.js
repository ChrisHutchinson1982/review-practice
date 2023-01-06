class GradeCounter {
  countGrades(string) {
    const arrayOfGrades = string.split(", ");
    let greenCount = 0;
    let redCount = 0;
    let amberCount = 0;

    arrayOfGrades.forEach((grade) => {
      if (grade === "Green") {
        greenCount += 1;
      } else if (grade === "Red") {
        redCount += 1;
      } else if (grade === "Amber") {
        amberCount += 1;
      }
    });

    let greenString = "";
    let redString = "";
    let amberString = "";

    if (greenCount > 0) {
      greenString = `Green: ${greenCount}\n`;
    }

    if (redCount > 0) {
      redString = `Red: ${redCount}\n`;
    }

    if (amberCount > 0) {
      amberString = `Amber: ${amberCount}\n`;
    }

    return `${greenString}${redString}${amberString}`;
  }
}

module.exports = GradeCounter;
