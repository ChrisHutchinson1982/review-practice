const arrayDiff = (a, b) => {
  return a.filter((index) => {
    if (index !== b[0]) {
      return index;
    }
  });
};

module.exports = arrayDiff;
