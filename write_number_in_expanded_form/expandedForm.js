class ExpandedForm {
  changeToExpandForm(number) {
    const arrayOfDigits = String(number).split("").map(Number).reverse();
    const ones = arrayOfDigits[0];
    const tens = arrayOfDigits[1] * 10;

    if (number > 10) {
      return `${tens} + ${ones}`;
    } else {
      return `${ones}`;
    }
  }
}

module.exports = ExpandedForm;
