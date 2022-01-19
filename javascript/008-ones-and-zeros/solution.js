const binaryArrayToNumber = (arr) => {
  const len = arr.length;
  return arr.reduce((prev, curr, idx) => curr * 2 ** (len - idx - 1) + prev, 0);
};

module.exports = binaryArrayToNumber;
