function arrayDiff(a, b) {
  b.forEach((num) => (a = a.filter((target) => target !== num)));
  return a;
}

module.exports = arrayDiff;
