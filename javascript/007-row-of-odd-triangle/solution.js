function oddRow(n) {
  const start = n * (n - 1) + 1;
  return [...Array(n)].map((_, idx) => start + idx * 2);
}

module.exports = oddRow;
