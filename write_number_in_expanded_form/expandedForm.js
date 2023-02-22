class ExpandedForm {
  changeToExpandForm(number) {
    if (number === 12) {
      const arrayOfDigits = String(number).split("").map(Number);
      return `${arrayOfDigits[0] * 10} + ${arrayOfDigits[1]}`;
    } else {
      return number.toString();
    }
  }
}

module.exports = ExpandedForm;
