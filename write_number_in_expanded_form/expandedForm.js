class ExpandedForm {
  changeToExpandForm(number) {
    const arrayOfDigits = String(number).split("").map(Number).reverse();
    const ones = arrayOfDigits[0];
    const tens = arrayOfDigits[1] * 10;
    const hundreds = arrayOfDigits[2] * 100;

    if (number > 100) {
      return `${hundreds} + ${tens} + ${ones}`;
    } else if (number > 10) {
      return `${tens} + ${ones}`;
    } else {
      return `${ones}`;
    }
  }
}

module.exports = ExpandedForm;
