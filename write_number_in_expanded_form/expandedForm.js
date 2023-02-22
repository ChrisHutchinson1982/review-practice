class ExpandedForm {
  changeToExpandForm(number) {
    const arrayOfDigits = String(number).split("").map(Number).reverse();
    let outputValues = [];

    arrayOfDigits.forEach((digit, index) => {
      if (digit > 0) {
        outputValues.push(digit + "0".repeat(index));
      }
    });

    return outputValues.reverse().join(" + ");
  }
}

module.exports = ExpandedForm;
