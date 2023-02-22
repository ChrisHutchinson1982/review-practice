const ExpandedForm = require("./expandedForm");

describe("write number in expanded form", () => {
  it("returns '1' when 1", () => {
    const expandedForm = new ExpandedForm();
    expect(expandedForm.changeToExpandForm(1)).toEqual("1");
  });
});
