function XO(str) {
  let counter = 0;
  for (const c of str.toLowerCase()) {
    if (c === "o") {
      counter++;
      continue;
    }
    if (c === "x") counter--;
  }
  return !counter;
}

module.exports = XO;
