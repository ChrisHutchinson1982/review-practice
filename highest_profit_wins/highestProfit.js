class HighestProfit {
  getMinAndMaxValues(array) {
    return [array.sort()[0], array.sort().pop()];
  }
}

module.exports = HighestProfit;
