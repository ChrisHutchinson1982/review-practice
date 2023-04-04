const arrayDiff = (a, b) => {
  const newArray = [];

  a.forEach((indexa) => {
    newArray.push(indexa);
    b.forEach((indexb) => {
      if (indexa === indexb) {
        newArray.pop();
      }
    });
  });

  return newArray;
};

module.exports = arrayDiff;
