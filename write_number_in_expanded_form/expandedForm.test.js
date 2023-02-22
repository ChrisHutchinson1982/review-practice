const ExpandedForm = require("./expandedForm");

describe("write number in expanded form", () => {
  it("returns '1' when 1", () => {
    const expandedForm = new ExpandedForm();
    expect(expandedForm.changeToExpandForm(1)).toEqual("1");
  });
  it("returns '2' when 2", () => {
    const expandedForm = new ExpandedForm();
    expect(expandedForm.changeToExpandForm(2)).toEqual("2");
  });
  it("returns '10' when 10", () => {
    const expandedForm = new ExpandedForm();
    expect(expandedForm.changeToExpandForm(10)).toEqual("10");
  });
});
