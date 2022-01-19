function arrayDiff(a, b) {
  return a.filter((target) => !b.includes(target));
}

module.exports = arrayDiff;
