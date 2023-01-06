const GradeCounter = require("./gradeCounter");

describe("count grades and return string", () => {
  it("when one instance of Green", () => {
    const gradeCounter = new GradeCounter();
    expect(gradeCounter.countGrades("Green")).toBe("Green: 1\n");
  });
  it("when mutiple instances of Green", () => {
    const gradeCounter = new GradeCounter();
    expect(gradeCounter.countGrades("Green, Green, Green")).toBe("Green: 3\n");
  });
});
