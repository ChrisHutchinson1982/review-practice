class HighestProfit {
  getMinAndMaxValues(array) {
    const sortedArray = array.sort((a, b) => a - b);

    return [sortedArray[0], sortedArray.pop()];
  }
}

module.exports = HighestProfit;
