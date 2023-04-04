const arrayDiff = (a, b) => {
  if (a[0] === b[0]) {
    return [a[1]];
  } else if (a[1] === b[0]) {
    return [a[0]];
  } else {
    return a;
  }
};

module.exports = arrayDiff;
