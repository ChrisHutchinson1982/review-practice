class GradeCounter {
  countGrades(string) {
    const arrayOfGrades = string.split(", ");

    this.greenCount = 0;
    this.redCount = 0;
    this.amberCount = 0;

    this.getCounts(arrayOfGrades);

    const greenGrades = this.formatGrades("Green", this.greenCount);
    const redGrades = this.formatGrades("Red", this.redCount);
    const amberGrades = this.formatGrades("Amber", this.amberCount);

    return `${greenGrades}${redGrades}${amberGrades}`;
  }

  getCounts(arrayOfGrades) {
    arrayOfGrades.forEach((grade) => {
      if (grade === "Green") {
        this.greenCount += 1;
      } else if (grade === "Red") {
        this.redCount += 1;
      } else if (grade === "Amber") {
        this.amberCount += 1;
      }
    });
  }

  formatGrades(grade, count) {
    console.log(grade);
    console.log(count);
    if (count > 0) {
      return `${grade}: ${count}\n`;
    } else {
      return "";
    }
  }
}

module.exports = GradeCounter;
