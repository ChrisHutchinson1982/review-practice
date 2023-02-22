class ExpandedForm {
  changeToExpandForm(number) {
    const arrayOfDigits = String(number).split("").map(Number).reverse();
    let outputValues = [];
    let placeValue = 1;

    arrayOfDigits.forEach((digit) => {
      outputValues.push(digit * placeValue);
      placeValue *= 10;
    });

    return outputValues.reverse().join(" + ");
  }
}

module.exports = ExpandedForm;
