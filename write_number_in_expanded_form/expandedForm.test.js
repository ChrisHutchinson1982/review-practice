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
  it("returns '9' when input is 9", () => {
    const expandedForm = new ExpandedForm();
    expect(expandedForm.changeToExpandForm(9)).toEqual("9");
  });
  it("returns '10 + 2' when input is 12", () => {
    const expandedForm = new ExpandedForm();
    expect(expandedForm.changeToExpandForm(12)).toEqual("10 + 2");
  });
  it("returns '10 + 4' when input is 14", () => {
    const expandedForm = new ExpandedForm();
    expect(expandedForm.changeToExpandForm(14)).toEqual("10 + 4");
  });
  it("returns '40 + 2' when input is 42", () => {
    const expandedForm = new ExpandedForm();
    expect(expandedForm.changeToExpandForm(42)).toEqual("40 + 2");
  });
  it("returns '100 + 20 + 2' when input is 122", () => {
    const expandedForm = new ExpandedForm();
    expect(expandedForm.changeToExpandForm(122)).toEqual("100 + 20 + 2");
  });
  it("returns '200 + 10 + 4' when input is 214", () => {
    const expandedForm = new ExpandedForm();
    expect(expandedForm.changeToExpandForm(214)).toEqual("200 + 10 + 4");
  });
  it("returns '300 + 10' when input is 310", () => {
    const expandedForm = new ExpandedForm();
    expect(expandedForm.changeToExpandForm(310)).toEqual("300 + 10");
  });
});
