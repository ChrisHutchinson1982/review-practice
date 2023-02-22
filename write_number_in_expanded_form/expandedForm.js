class ExpandedForm {
  changeToExpandForm(number) {
    const arrayOfDigits = String(number).split("").map(Number).reverse();
    let outputValues = [];
    let placeValue = 1;

    arrayOfDigits.forEach((digit) => {
      const outputValue = digit * placeValue;
      if (outputValue > 0) {
        outputValues.push(outputValue);
      }
      placeValue *= 10;
    });

    return outputValues.reverse().join(" + ");
  }
}

module.exports = ExpandedForm;
