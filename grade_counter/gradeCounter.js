class GradeCounter {
  countGrades(string) {
    const arrayOfGrades = string.split(", ");
    let greenCount = 0;
    let redCount = 0;

    arrayOfGrades.forEach((grade) => {
      if (grade === "Green") {
        greenCount += 1;
      } else if (grade === "Red") {
        redCount += 1;
      }
    });

    let greenString = "";
    let redString = "";

    if (greenCount > 0) {
      greenString = `Green: ${greenCount}\n`;
    }

    if (redCount > 0) {
      redString = `Red: ${redCount}\n`;
    }

    console.log(redString);

    return `${greenString}${redString}`;
  }
}

module.exports = GradeCounter;
