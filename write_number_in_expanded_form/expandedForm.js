class ExpandedForm {
  changeToExpandForm(number) {
    const arrayOfDigits = String(number).split("").map(Number);
    const ones = arrayOfDigits[1];
    const tens = arrayOfDigits[0] * 10;

    if (number > 10) {
      return `${tens} + ${ones}`;
    } else {
      return number.toString();
    }
  }
}

module.exports = ExpandedForm;
