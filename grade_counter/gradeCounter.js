class GradeCounter {
  countGrades(string) {
    const arrayOfGrades = string.split(", ");
    let greenCount = 0;

    arrayOfGrades.forEach((grade) => {
      if (grade === "Green") {
        greenCount += 1;
      }
    });

    console.log(`${greenCount}`);
    return `Green: ${greenCount}\n`;
  }
}

module.exports = GradeCounter;
