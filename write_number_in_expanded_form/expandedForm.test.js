const ExpandedForm = require("./expandedForm");

describe("write number in expanded form", () => {
  it("returns '1' when input is 1", () => {
    const expandedForm = new ExpandedForm();
    expect(expandedForm.changeToExpandForm(1)).toEqual("1");
  });
  it("returns '2' when input is 2", () => {
    const expandedForm = new ExpandedForm();
    expect(expandedForm.changeToExpandForm(2)).toEqual("2");
  });
  it("returns '10' when input is 10", () => {
    const expandedForm = new ExpandedForm();
    expect(expandedForm.changeToExpandForm(10)).toEqual("10");
  });
  it("returns '10 + 2' when input is 12", () => {
    const expandedForm = new ExpandedForm();
    expect(expandedForm.changeToExpandForm(12)).toEqual("10 + 2");
  });
});
