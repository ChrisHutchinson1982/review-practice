class HighestProfit {
  getMinAndMaxValues(array) {
    const sortedArray = array.sort();

    return [sortedArray[0], sortedArray.pop()];
  }
}

module.exports = HighestProfit;
