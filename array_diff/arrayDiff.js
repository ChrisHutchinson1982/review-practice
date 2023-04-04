const arrayDiff = (a, b) => {
  if (a[0] === b[0]) {
    return [a[1]];
  } else {
    return [a[0]];
  }
};

module.exports = arrayDiff;
