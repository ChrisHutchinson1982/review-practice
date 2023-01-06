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
  it("when mutiple instances of Green and Red", () => {
    const gradeCounter = new GradeCounter();
    expect(gradeCounter.countGrades("Green, Green, Green, Red, Red")).toBe(
      "Green: 3\nRed: 2\n"
    );
  });
  it("when mutiple instances of Red", () => {
    const gradeCounter = new GradeCounter();
    expect(gradeCounter.countGrades("Red, Red")).toBe("Red: 2\n");
  });
  it("when mutiple instances of Amber", () => {
    const gradeCounter = new GradeCounter();
    expect(gradeCounter.countGrades("Amber, Amber")).toBe("Amber: 2\n");
  });
  it("when mutiple instances of Green, Red and Amber", () => {
    const gradeCounter = new GradeCounter();
    expect(
      gradeCounter.countGrades("Green, Red, Green, Red, Red, Amber, Amber")
    ).toBe("Green: 2\nRed: 3\nAmber: 2\n");
  });
  it("when mutiple instances of Red and Amber", () => {
    const gradeCounter = new GradeCounter();
    expect(gradeCounter.countGrades("Red, Red, Amber, Amber")).toBe(
      "Red: 2\nAmber: 2\n"
    );
  });
});
